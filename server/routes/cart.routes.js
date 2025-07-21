import express from 'express';
import { auth } from '../middleware/auth.middleware.js';
import {
  getCart,
  addItemToCart,
  updateCartItem,
  removeItemFromCart,
  clearCart,
} from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/', auth, getCart);
router.post('/add', auth, addItemToCart);
router.put('/update/:bookId', auth, updateCartItem);
router.delete('/remove/:bookId', auth, removeItemFromCart);
router.delete('/clear', auth, clearCart);

export default router; 