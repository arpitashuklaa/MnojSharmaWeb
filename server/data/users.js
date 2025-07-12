const bcrypt = require('bcryptjs');

// Sample users data - in a real app, this would come from a database
let users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    role: "admin",
    avatar: "https://ui-avatars.com/api/?name=Admin+User&background=amber&color=fff",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-12-20')
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10),
    role: "user",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=amber&color=fff",
    phone: "+1-555-0123",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    createdAt: new Date('2023-02-15'),
    updatedAt: new Date('2023-12-18')
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("password123", 10),
    role: "user",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=amber&color=fff",
    phone: "+1-555-0456",
    address: "456 Oak Ave",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90210",
    createdAt: new Date('2023-03-10'),
    updatedAt: new Date('2023-12-15')
  }
];

// Helper functions
const generateId = () => {
  return Math.max(...users.map(user => user.id)) + 1;
};

const findUserById = (id) => {
  return users.find(user => user.id === parseInt(id));
};

const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

const createUser = (userData) => {
  const newUser = {
    id: generateId(),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  users.push(newUser);
  return newUser;
};

const updateUser = (id, userData) => {
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) return null;
  
  users[userIndex] = {
    ...users[userIndex],
    ...userData,
    updatedAt: new Date()
  };
  return users[userIndex];
};

const deleteUser = (id) => {
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) return false;
  
  users.splice(userIndex, 1);
  return true;
};

module.exports = {
  users,
  generateId,
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser
}; 