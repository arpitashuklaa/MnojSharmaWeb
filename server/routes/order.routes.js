import express from 'express';
import { auth, adminAuth } from '../middleware/auth.middleware.js';
import {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  getAllOrders,
  getOrderStats
} from '../controllers/order.controller.js';

const router = express.Router();

// Get user's orders (authenticated users)
router.get('/my-orders', auth, getUserOrders);

// Get order by ID (authenticated users - only their own orders)
router.get('/:id', auth, getOrderById);

// Create new order (authenticated users)
router.post('/', auth, createOrder);

// Update order status (admin only)
router.put('/:id/status', adminAuth, updateOrderStatus);

// Get all orders (admin only)
router.get('/admin/all', adminAuth, getAllOrders);

// Get order statistics (admin only)
router.get('/admin/stats', adminAuth, getOrderStats);

export default router; 