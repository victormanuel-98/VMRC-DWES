import { Router } from 'express';
import path from 'path';
import multer from 'multer';
import { listFiles, downloadFile, deleteFile, uploadFiles } from '../controllers/files.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Store files on disk under project files/ directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(process.cwd(), 'files')),
  filename: (req, file, cb) => cb(null, file.originalname)
});

const upload = multer({ storage });

// List files
router.get('/', verifyToken, listFiles);

// Upload one or many files (any extension)
router.post('/upload', verifyToken, upload.array('files'), uploadFiles);

// Download by name
router.get('/download/:name', verifyToken, downloadFile);

// Delete
router.delete('/:name', verifyToken, deleteFile);

export default router;
