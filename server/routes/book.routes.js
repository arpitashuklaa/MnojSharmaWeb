import express from 'express';
import { auth, adminAuth } from '../middleware/auth.middleware.js';
import {
  getBooks,
  getBookById,
  getBookBySlug,
  createBook,
  updateBook,
  deleteBook,
  getBookStats
} from '../controllers/book.controller.js';

const router = express.Router();

// Get all books (public)
router.get('/', getBooks);

// Get book by ID (public)
router.get('/:id', getBookById);

// Get book by slug (public)
router.get('/slug/:slug', getBookBySlug);

// Create new book (admin only)
router.post('/', adminAuth, createBook);

// Update book (admin only)
router.put('/:id', adminAuth, updateBook);

// Delete book (admin only)
router.delete('/:id', adminAuth, deleteBook);

// Get books statistics (admin only)
router.get('/admin/stats', adminAuth, getBookStats);

export default router; 