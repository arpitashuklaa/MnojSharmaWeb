const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { 
  orders, 
  findOrderById, 
  findOrdersByUserId, 
  createOrder, 
  updateOrderStatus, 
  getAllOrders 
} = require('../data/orders');
const { findBookById } = require('../data/books');

const router = express.Router();

// Get user's orders (authenticated users)
router.get('/my-orders', auth, (req, res) => {
  try {
    const userOrders = findOrdersByUserId(req.user.id);
    
    res.json({
      success: true,
      data: userOrders,
      total: userOrders.length
    });

  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders'
    });
  }
});

// Get order by ID (authenticated users - only their own orders)
router.get('/:id', auth, (req, res) => {
  try {
    const order = findOrderById(req.params.id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Check if user owns this order or is admin
    if (order.userId !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    res.json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order'
    });
  }
});

// Create new order (authenticated users)
router.post('/', auth, (req, res) => {
  try {
    const { 
      items, 
      shippingAddress, 
      paymentMethod, 
      total 
    } = req.body;

    // Validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order must contain at least one item'
      });
    }

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: 'Shipping address is required'
      });
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Payment method is required'
      });
    }

    // Validate items and check stock
    const validatedItems = [];
    for (const item of items) {
      const book = findBookById(item.bookId);
      if (!book) {
        return res.status(400).json({
          success: false,
          message: `Book with ID ${item.bookId} not found`
        });
      }

      if (book.stock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for ${book.title}. Available: ${book.stock}`
        });
      }

      validatedItems.push({
        bookId: item.bookId,
        title: book.title,
        quantity: item.quantity,
        price: parseFloat(book.price.replace('$', '')),
        total: parseFloat(book.price.replace('$', '')) * item.quantity
      });
    }

    // Calculate total if not provided
    const calculatedTotal = validatedItems.reduce((sum, item) => sum + item.total, 0);
    const orderTotal = total || calculatedTotal;

    // Create order data
    const orderData = {
      userId: req.user.id,
      status: 'Pending',
      total: orderTotal,
      shippingAddress,
      paymentMethod,
      items: validatedItems
    };

    const newOrder = createOrder(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder
    });

  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create order'
    });
  }
});

// Update order status (admin only)
router.put('/:id/status', adminAuth, (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Status is required'
      });
    }

    const validStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be one of: ' + validStatuses.join(', ')
      });
    }

    const updatedOrder = updateOrderStatus(req.params.id, status);

    if (!updatedOrder) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({
      success: true,
      message: 'Order status updated successfully',
      data: updatedOrder
    });

  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update order status'
    });
  }
});

// Get all orders (admin only)
router.get('/admin/all', adminAuth, (req, res) => {
  try {
    const { status, sort, limit } = req.query;
    let filteredOrders = getAllOrders();

    // Filter by status
    if (status) {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }

    // Sort orders
    if (sort) {
      switch (sort) {
        case 'date':
          filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        case 'total':
          filteredOrders.sort((a, b) => b.total - a.total);
          break;
        case 'status':
          filteredOrders.sort((a, b) => a.status.localeCompare(b.status));
          break;
        default:
          filteredOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    }

    // Limit results
    if (limit) {
      filteredOrders = filteredOrders.slice(0, parseInt(limit));
    }

    res.json({
      success: true,
      data: filteredOrders,
      total: filteredOrders.length
    });

  } catch (error) {
    console.error('Get all orders error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders'
    });
  }
});

// Get order statistics (admin only)
router.get('/admin/stats', adminAuth, (req, res) => {
  try {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    
    const ordersByStatus = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {});

    const ordersByMonth = orders.reduce((acc, order) => {
      const month = new Date(order.createdAt).toLocaleString('default', { month: 'long' });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    const recentOrders = orders
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    const averageOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

    res.json({
      success: true,
      data: {
        totalOrders,
        totalRevenue: totalRevenue.toFixed(2),
        averageOrderValue,
        ordersByStatus,
        ordersByMonth,
        recentOrders
      }
    });

  } catch (error) {
    console.error('Get order stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch order statistics'
    });
  }
});

module.exports = router; 