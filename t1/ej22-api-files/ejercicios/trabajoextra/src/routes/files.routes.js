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

// Download by name or path (supports subfolders)
// Download via query parameter to avoid router wildcard issues
router.get('/download', verifyToken, downloadFile);

// Delete (supports ?name=... for paths with subfolders)
router.delete('/', verifyToken, deleteFile);
// Backward-compatible single-segment delete
router.delete('/:name', verifyToken, deleteFile);

export default router;
