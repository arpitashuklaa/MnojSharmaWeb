const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { 
  users, 
  findUserById, 
  findUserByEmail, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../data/users');

const router = express.Router();

// Get all users (admin only)
router.get('/', adminAuth, (req, res) => {
  try {
    const { search, role, sort } = req.query;
    let filteredUsers = [...users];

    // Search by name or email
    if (search) {
      const searchLower = search.toLowerCase();
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
      );
    }

    // Filter by role
    if (role) {
      filteredUsers = filteredUsers.filter(user => user.role === role);
    }

    // Sort users
    if (sort) {
      switch (sort) {
        case 'name':
          filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'email':
          filteredUsers.sort((a, b) => a.email.localeCompare(b.email));
          break;
        case 'createdAt':
          filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          break;
        default:
          filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    } else {
      // Default sort by creation date (newest first)
      filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    // Remove passwords from response
    const usersWithoutPasswords = filteredUsers.map(user => {
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.json({
      success: true,
      data: usersWithoutPasswords,
      total: usersWithoutPasswords.length
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    });
  }
});

// Get user by ID (admin only)
router.get('/:id', adminAuth, (req, res) => {
  try {
    const user = findUserById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user'
    });
  }
});

// Create new user (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const { name, email, password, role, phone, address, city, state, zipCode } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and password'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Create user data
    const userData = {
      name,
      email,
      password, // Will be hashed in the createUser function
      role: role || 'user',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=amber&color=fff`,
      phone: phone || '',
      address: address || '',
      city: city || '',
      state: state || '',
      zipCode: zipCode || ''
    };

    const newUser = createUser(userData);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Create user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create user'
    });
  }
});

// Update user (admin only)
router.put('/:id', adminAuth, (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = findUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const { name, email, role, phone, address, city, state, zipCode } = req.body;

    // Check if email is being changed and if it already exists
    if (email && email !== user.email) {
      const existingUser = findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'User with this email already exists'
        });
      }
    }

    // Update user data
    const updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (role) updateData.role = role;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;
    if (city !== undefined) updateData.city = city;
    if (state !== undefined) updateData.state = state;
    if (zipCode !== undefined) updateData.zipCode = zipCode;

    // Update avatar if name changed
    if (name) {
      updateData.avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=amber&color=fff`;
    }

    const updatedUser = updateUser(userId, updateData);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = updatedUser;

    res.json({
      success: true,
      message: 'User updated successfully',
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update user'
    });
  }
});

// Delete user (admin only)
router.delete('/:id', adminAuth, (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = findUserById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Prevent deleting admin users
    if (user.role === 'admin') {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete admin users'
      });
    }

    const deletedUser = deleteUser(userId);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = deletedUser;

    res.json({
      success: true,
      message: 'User deleted successfully',
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete user'
    });
  }
});

// Get user statistics (admin only)
router.get('/admin/stats', adminAuth, (req, res) => {
  try {
    const totalUsers = users.length;
    const adminUsers = users.filter(user => user.role === 'admin').length;
    const regularUsers = users.filter(user => user.role === 'user').length;

    const usersByMonth = users.reduce((acc, user) => {
      const month = new Date(user.createdAt).toLocaleString('default', { month: 'long' });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {});

    const recentUsers = users
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5)
      .map(user => {
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
      });

    res.json({
      success: true,
      data: {
        totalUsers,
        adminUsers,
        regularUsers,
        usersByMonth,
        recentUsers
      }
    });

  } catch (error) {
    console.error('Get user stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user statistics'
    });
  }
});

module.exports = router; 