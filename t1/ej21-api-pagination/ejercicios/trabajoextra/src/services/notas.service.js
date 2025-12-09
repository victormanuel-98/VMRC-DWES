import { cargarNotas, guardarNotas } from "../utils/fileManager.js";

export function getAll(options) {
    const notas = cargarNotas();
    // If no options provided, preserve previous behaviour and return raw array
    if (!options || Object.keys(options).length === 0) return notas;

    // Normalize notes to objects so filtering/sorting is simpler
    let items = notas.map((n, idx) => {
        if (typeof n === "string") return { id: null, titulo: n, contenido: "", createdAt: null, updatedAt: null };
        return { ...n };
    });

    const {
        filterTitle,
        filterContent,
        category,
        fromDate,
        toDate,
        sortBy,
        order = "asc",
        page = 1,
        perPage = 10,
    } = options;

    // Filtering
    if (filterTitle) {
        const t = String(filterTitle).toLowerCase();
        items = items.filter(i => (i.titulo || "").toLowerCase().includes(t));
    }

    if (filterContent) {
        const t = String(filterContent).toLowerCase();
        items = items.filter(i => (i.contenido || "").toLowerCase().includes(t));
    }

    if (category) {
        items = items.filter(i => i.categoria == category);
    }

    // Date range filtering (use createdAt/updatedAt if available, otherwise try id as timestamp)
    const parseDate = v => {
        if (!v) return null;
        const n = Number(v);
        if (!isNaN(n)) return n;
        const d = Date.parse(v);
        return isNaN(d) ? null : d;
    };

    const fromTs = parseDate(fromDate);
    const toTs = parseDate(toDate);

    if (fromTs || toTs) {
        items = items.filter(i => {
            let ts = null;
            if (i.createdAt) ts = Number(new Date(i.createdAt));
            else if (i.updatedAt) ts = Number(new Date(i.updatedAt));
            else if (typeof i.id === 'number') ts = i.id;
            if (!ts) return false;
            if (fromTs && ts < fromTs) return false;
            if (toTs && ts > toTs) return false;
            return true;
        });
    }

    // Sorting
    if (sortBy) {
        const dir = String(order).toLowerCase() === "desc" ? -1 : 1;
        if (sortBy === "date") {
            items.sort((a, b) => {
                const ta = a.createdAt ? Number(new Date(a.createdAt)) : (typeof a.id === 'number' ? a.id : 0);
                const tb = b.createdAt ? Number(new Date(b.createdAt)) : (typeof b.id === 'number' ? b.id : 0);
                return (ta - tb) * dir;
            });
        } else if (sortBy === "titulo" || sortBy === "title") {
            items.sort((a, b) => ((a.titulo || "").localeCompare(b.titulo || "")) * dir);
        } else if (sortBy === "size") {
            const size = x => ((x.titulo||"").length + (x.contenido||"").length);
            items.sort((a, b) => (size(a) - size(b)) * dir);
        }
    }

    // Pagination
    const p = Math.max(parseInt(page) || 1, 1);
    const pp = Math.max(parseInt(perPage) || 10, 1);
    const totalItems = items.length;
    const totalPages = Math.max(Math.ceil(totalItems / pp), 1);
    const start = (p - 1) * pp;
    const paged = items.slice(start, start + pp);

    return {
        items: paged,
        totalItems,
        totalPages,
        page: p,
        perPage: pp,
    };
}

export function getById(id) {
    const notas = cargarNotas();
    return notas.find(n => n.id == id);
}

export function create(data) {
    const notas = cargarNotas();
    const now = Date.now();
    const nueva = { id: now, createdAt: now, updatedAt: now, ...data };
    notas.push(nueva);
    guardarNotas(notas);
    return nueva;
}

export function update(id, data) {
    const notas = cargarNotas();
    const index = notas.findIndex(n => n.id == id);
    if (index === -1) return null;
    const now = Date.now();
    notas[index] = { ...notas[index], ...data, updatedAt: now };
    guardarNotas(notas);
    return notas[index];
}

export function remove(id) {
    const notas = cargarNotas();
    const nuevas = notas.filter(n => n.id != id);
    if (nuevas.length === notas.length) return false;

    guardarNotas(nuevas);
    return true;
}
