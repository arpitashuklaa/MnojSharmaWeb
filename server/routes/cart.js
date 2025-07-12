const express = require('express');
const { auth } = require('../middleware/auth');
const { findBookById } = require('../data/books');

const router = express.Router();

// In-memory cart storage (in a real app, this would be in a database)
const userCarts = new Map();

// Get user's cart
router.get('/', auth, (req, res) => {
  try {
    const userId = req.user.id;
    const cart = userCarts.get(userId) || [];

    res.json({
      success: true,
      data: cart,
      total: cart.length
    });

  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch cart'
    });
  }
});

// Add item to cart
router.post('/add', auth, (req, res) => {
  try {
    const { bookId, quantity = 1 } = req.body;
    const userId = req.user.id;

    // Validation
    if (!bookId) {
      return res.status(400).json({
        success: false,
        message: 'Book ID is required'
      });
    }

    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be greater than 0'
      });
    }

    // Check if book exists
    const book = findBookById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    // Check stock availability
    if (book.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Available: ${book.stock}`
      });
    }

    // Get user's cart
    const cart = userCarts.get(userId) || [];

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.bookId === bookId);

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists
      const newQuantity = cart[existingItemIndex].quantity + quantity;
      
      // Check stock again for updated quantity
      if (book.stock < newQuantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for requested quantity. Available: ${book.stock}`
        });
      }

      cart[existingItemIndex].quantity = newQuantity;
      cart[existingItemIndex].total = parseFloat(book.price.replace('$', '')) * newQuantity;
    } else {
      // Add new item to cart
      const cartItem = {
        bookId: book.id,
        title: book.title,
        price: book.price,
        quantity,
        total: parseFloat(book.price.replace('$', '')) * quantity
      };
      cart.push(cartItem);
    }

    // Update cart
    userCarts.set(userId, cart);

    res.json({
      success: true,
      message: 'Item added to cart successfully',
      data: cart,
      total: cart.length
    });

  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add item to cart'
    });
  }
});

// Update cart item quantity
router.put('/update/:bookId', auth, (req, res) => {
  try {
    const { bookId } = req.params;
    const { quantity } = req.body;
    const userId = req.user.id;

    // Validation
    if (!quantity || quantity < 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid quantity is required'
      });
    }

    // Get user's cart
    const cart = userCarts.get(userId) || [];
    const itemIndex = cart.findIndex(item => item.bookId === parseInt(bookId));

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    // Check if book exists and has sufficient stock
    const book = findBookById(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    if (book.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Available: ${book.stock}`
      });
    }

    if (quantity === 0) {
      // Remove item if quantity is 0
      cart.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart[itemIndex].quantity = quantity;
      cart[itemIndex].total = parseFloat(book.price.replace('$', '')) * quantity;
    }

    // Update cart
    userCarts.set(userId, cart);

    res.json({
      success: true,
      message: 'Cart updated successfully',
      data: cart,
      total: cart.length
    });

  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update cart'
    });
  }
});

// Remove item from cart
router.delete('/remove/:bookId', auth, (req, res) => {
  try {
    const { bookId } = req.params;
    const userId = req.user.id;

    // Get user's cart
    const cart = userCarts.get(userId) || [];
    const itemIndex = cart.findIndex(item => item.bookId === parseInt(bookId));

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }

    // Remove item
    cart.splice(itemIndex, 1);

    // Update cart
    userCarts.set(userId, cart);

    res.json({
      success: true,
      message: 'Item removed from cart successfully',
      data: cart,
      total: cart.length
    });

  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to remove item from cart'
    });
  }
});

// Clear cart
router.delete('/clear', auth, (req, res) => {
  try {
    const userId = req.user.id;

    // Clear user's cart
    userCarts.set(userId, []);

    res.json({
      success: true,
      message: 'Cart cleared successfully',
      data: [],
      total: 0
    });

  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to clear cart'
    });
  }
});

// Get cart summary (total items and total price)
router.get('/summary', auth, (req, res) => {
  try {
    const userId = req.user.id;
    const cart = userCarts.get(userId) || [];

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.total, 0);

    res.json({
      success: true,
      data: {
        totalItems,
        totalPrice: totalPrice.toFixed(2),
        itemCount: cart.length
      }
    });

  } catch (error) {
    console.error('Get cart summary error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get cart summary'
    });
  }
});

// Validate cart (check stock availability)
router.post('/validate', auth, (req, res) => {
  try {
    const userId = req.user.id;
    const cart = userCarts.get(userId) || [];

    const validationResults = [];
    let isValid = true;

    for (const item of cart) {
      const book = findBookById(item.bookId);
      
      if (!book) {
        validationResults.push({
          bookId: item.bookId,
          title: item.title,
          valid: false,
          message: 'Book not found'
        });
        isValid = false;
      } else if (book.stock < item.quantity) {
        validationResults.push({
          bookId: item.bookId,
          title: item.title,
          valid: false,
          message: `Insufficient stock. Available: ${book.stock}, Requested: ${item.quantity}`
        });
        isValid = false;
      } else {
        validationResults.push({
          bookId: item.bookId,
          title: item.title,
          valid: true,
          message: 'Available'
        });
      }
    }

    res.json({
      success: true,
      data: {
        isValid,
        validationResults
      }
    });

  } catch (error) {
    console.error('Validate cart error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to validate cart'
    });
  }
});

module.exports = router; 