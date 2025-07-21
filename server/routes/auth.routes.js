import express from 'express';
import { auth } from '../middleware/auth.middleware.js';
import { registerUser, loginUser, getUserProfile } from '../controllers/user.controller.js';

const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get current user profile
router.get('/me', auth, getUserProfile);

export default router; 