# Gestor de Notas (se añaden imágenes al final con los resultados)

Sobre el proyecto de notas:

- Permitir importar (subir) uno o varios ficheros de extensión .note para almacenarlo directamente.

- Permitir exportar las notas para descargar directamente los ficheros fuente, para mejor usabilidad, implementar filtros para la selección de notas.

---

## Instalación

Se clona la carpeta con el trabajo desde el tema 21 y se añade a la carpeta del tema 22.

### Configuración

- Copia `.env.example` a `.env` y ajusta los valores:

```
PORT=3000
JWT_SECRET=change_me_dev_secret
JWT_EXPIRES_IN=1h
ADMIN_USER=admin
ADMIN_PASS=admin123
NOTAS_PER_PAGE_DEFAULT=10
```

- En Windows (cmd) puedes iniciar con un puerto distinto:

```
set PORT=4000 && npm start
```

- En PowerShell:

```
$env:PORT=4000; npm start
```

## Ejecución mediante capturas

### Se levanta el servidor desde la terminal de vscode con bash.

![server up](./samples/images/notasServerUp.png)

---

### Se ven todas las notas con extensión '.note'

![Todas las notas](./samples/images/notasContenidoNotas.png)

---

### Se ven los archivos con extensión '.pdf'

![notas pdf](./samples/images/notasArchivosPdf.png)

---
