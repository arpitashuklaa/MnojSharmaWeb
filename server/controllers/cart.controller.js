import Book from '../models/book.model.js';

const userCarts = new Map();

export const getCart = (req, res) => {
  try {
    const userId = req.user.id;
    const cart = userCarts.get(userId) || [];
    res.json({ success: true, data: cart, total: cart.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch cart' });
  }
};

export const addItemToCart = async (req, res) => {
  try {
    const { bookId, quantity = 1 } = req.body;
    const userId = req.user.id;
    if (!bookId) {
      return res.status(400).json({ success: false, message: 'Book ID is required' });
    }
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    if (book.stock < quantity) {
      return res.status(400).json({ success: false, message: `Insufficient stock. Available: ${book.stock}` });
    }
    const cart = userCarts.get(userId) || [];
    const existingItemIndex = cart.findIndex(item => item.bookId === bookId);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].total = book.price * cart[existingItemIndex].quantity;
    } else {
      cart.push({
        bookId: book._id.toString(),
        title: book.title,
        price: book.price,
        quantity,
        total: book.price * quantity
      });
    }
    userCarts.set(userId, cart);
    res.json({ success: true, message: 'Item added to cart', data: cart, total: cart.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add item to cart' });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { quantity } = req.body;
    const userId = req.user.id;
    if (!quantity || quantity < 0) {
      return res.status(400).json({ success: false, message: 'Valid quantity is required' });
    }
    const cart = userCarts.get(userId) || [];
    const itemIndex = cart.findIndex(item => item.bookId === bookId);
    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Item not found in cart' });
    }
    if (quantity === 0) {
      cart.splice(itemIndex, 1);
    } else {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ success: false, message: 'Book not found' });
      }
      if (book.stock < quantity) {
        return res.status(400).json({ success: false, message: `Insufficient stock. Available: ${book.stock}` });
      }
      cart[itemIndex].quantity = quantity;
      cart[itemIndex].total = book.price * quantity;
    }
    userCarts.set(userId, cart);
    res.json({ success: true, message: 'Cart updated', data: cart, total: cart.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update cart' });
  }
};

export const removeItemFromCart = (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;
    const cart = userCarts.get(userId) || [];
    const itemIndex = cart.findIndex(item => item.bookId === bookId);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
      userCarts.set(userId, cart);
    }
    res.json({ success: true, message: 'Item removed from cart', data: cart, total: cart.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to remove item from cart' });
  }
};

export const clearCart = (req, res) => {
  try {
    const userId = req.user.id;
    userCarts.set(userId, []);
    res.json({ success: true, message: 'Cart cleared', data: [], total: 0 });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to clear cart' });
  }
}; 