import fs from 'fs';
import path from 'path';

const FILES_DIR = path.join(process.cwd(), 'files');

function ensureDir(){
  if (!fs.existsSync(FILES_DIR)) fs.mkdirSync(FILES_DIR, { recursive: true });
}

export function listFiles(req, res){
  try{
    ensureDir();
    const names = fs.readdirSync(FILES_DIR);
    const details = names.map(name => {
      const full = path.join(FILES_DIR, name);
      const stat = fs.statSync(full);
      return { name, size: stat.size, mtime: stat.mtime };
    });
    res.json(details);
  }catch(err){
    console.error('listFiles error', err);
    res.status(500).json({ error: 'No se pudieron listar archivos' });
  }
}

export function uploadFiles(req, res){
  try{
    const files = req.files || [];
    const result = files.map(f => ({ originalname: f.originalname, size: f.size }));
    res.status(201).json({ message: 'Ficheros subidos correctamente', files: result });
  }catch(err){
    console.error('uploadFiles error', err);
    res.status(500).json({ error: 'Error al subir ficheros' });
  }
}

const safeName = (name) => path.basename(name).replace(/\s+/g, '_');

export function downloadFile(req, res){
  try{
    ensureDir();
    const name = safeName(req.params.name);
    const full = path.join(FILES_DIR, name);
    if (!fs.existsSync(full)) return res.status(404).json({ error: 'Fichero no encontrado' });
    return res.download(full, name, err => {
      if (err) console.error('download error', err);
    });
  }catch(err){
    console.error('downloadFile error', err);
    res.status(500).json({ error: 'Error descargando fichero' });
  }
}

export function deleteFile(req, res){
  try{
    ensureDir();
    const name = safeName(req.params.name);
    const full = path.join(FILES_DIR, name);
    if (!fs.existsSync(full)) return res.status(404).json({ error: 'Fichero no encontrado' });
    fs.unlinkSync(full);
    res.json({ message: 'Fichero borrado' });
  }catch(err){
    console.error('deleteFile error', err);
    res.status(500).json({ error: 'Error borrando fichero' });
  }
}
