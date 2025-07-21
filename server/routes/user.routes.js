import express from 'express';
import { auth, adminAuth } from '../middleware/auth.middleware.js';
import { getUsers, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

// Get all users (admin only)
router.get('/', adminAuth, getUsers);

// Delete user (admin only)
router.delete('/:id', adminAuth, deleteUser);

export default router; 