const { v4: uuidv4 } = require('uuid');

// Sample orders data - in a real app, this would come from a database
let orders = [
  {
    id: 'ORD-1703123456-ABC123DEF',
    userId: 2,
    status: 'Delivered',
    total: 45.98,
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1-555-0123',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethod: {
      type: 'credit_card',
      last4: '1234',
      brand: 'Visa'
    },
    items: [
      {
        bookId: 1,
        title: 'Pentacles',
        quantity: 1,
        price: 19.99,
        total: 19.99
      },
      {
        bookId: 2,
        title: 'Frosted Glass',
        quantity: 1,
        price: 24.99,
        total: 24.99
      }
    ],
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2023-12-22'),
    deliveredAt: new Date('2023-12-22')
  },
  {
    id: 'ORD-1702987654-XYZ789GHI',
    userId: 3,
    status: 'Shipped',
    total: 21.99,
    shippingAddress: {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      phone: '+1-555-0456',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'United States'
    },
    paymentMethod: {
      type: 'credit_card',
      last4: '5678',
      brand: 'Mastercard'
    },
    items: [
      {
        bookId: 3,
        title: 'Abyss',
        quantity: 1,
        price: 21.99,
        total: 21.99
      }
    ],
    createdAt: new Date('2023-12-18'),
    updatedAt: new Date('2023-12-19'),
    shippedAt: new Date('2023-12-19')
  }
];

// Helper functions
const generateOrderId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

const findOrderById = (id) => {
  return orders.find(order => order.id === id);
};

const findOrdersByUserId = (userId) => {
  return orders.filter(order => order.userId === parseInt(userId));
};

const createOrder = (orderData) => {
  const newOrder = {
    id: generateOrderId(),
    ...orderData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  orders.push(newOrder);
  return newOrder;
};

const updateOrderStatus = (id, status) => {
  const orderIndex = orders.findIndex(order => order.id === id);
  if (orderIndex === -1) return null;
  
  const updateData = {
    status,
    updatedAt: new Date()
  };
  
  if (status === 'Shipped') {
    updateData.shippedAt = new Date();
  } else if (status === 'Delivered') {
    updateData.deliveredAt = new Date();
  }
  
  orders[orderIndex] = {
    ...orders[orderIndex],
    ...updateData
  };
  
  return orders[orderIndex];
};

const getAllOrders = () => {
  return orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

module.exports = {
  orders,
  generateOrderId,
  findOrderById,
  findOrdersByUserId,
  createOrder,
  updateOrderStatus,
  getAllOrders
}; 