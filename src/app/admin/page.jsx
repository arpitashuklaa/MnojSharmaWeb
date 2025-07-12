
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiTrendingUp, FiSettings, FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import AdminLayout from '../components/AdminLayout';

const AdminDashboard = () => {
  // Sample statistics - in a real app, these would come from an API
  const stats = {
    totalBooks: 4,
    totalSales: 1250,
    totalRevenue: '$24,500',
    activeUsers: 89
  };

  const recentBooks = [
    {
      id: 1,
      title: "Pentacles",
      author: "Manoj Kumar Sharma",
      year: "2023",
      stock: 50,
      sales: 128
    },
    {
      id: 2,
      title: "Frosted Glass",
      author: "Manoj Kumar Sharma",
      year: "2022",
      stock: 35,
      sales: 95
    },
    {
      id: 3,
      title: "Abyss",
      author: "Manoj Kumar Sharma",
      year: "2021",
      stock: 42,
      sales: 156
    }
  ];

  const quickActions = [
    {
      title: "Add New Book",
      description: "Create a new book entry",
      icon: FiPlus,
      href: "/admin/books/add",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Manage Books",
      description: "View and edit all books",
      icon: FiBookOpen,
      href: "/admin/books",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "View Analytics",
      description: "Check sales and performance",
      icon: FiTrendingUp,
      href: "/admin/analytics",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "User Management",
      description: "Manage user accounts",
      icon: FiUsers,
      href: "/admin/users",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <AdminLayout>
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="mt-2 text-gray-600">Welcome to your book management system</p>
            </div>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Books</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalBooks}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSales}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                <FiUsers className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeUsers}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={action.title} href={action.href}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`${action.color} text-white p-4 rounded-lg cursor-pointer transition-colors flex items-center gap-3`}
                    >
                      <action.icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{action.title}</h3>
                        <p className="text-sm opacity-90">{action.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Recent Books */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Books</h2>
                <Link href="/admin/books">
                  <span className="text-amber-600 hover:text-amber-700 text-sm font-medium">View All</span>
                </Link>
              </div>
              <div className="space-y-4">
                {recentBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-amber-800 font-semibold text-sm">
                          {book.title.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{book.title}</h4>
                        <p className="text-xs text-gray-500">{book.author} • {book.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Stock: {book.stock}</span>
                      <span className="text-xs text-amber-600 font-semibold">Sales: {book.sales}</span>
                      <Link href={`/admin/books/edit/${book.id}`}>
                        <button className="ml-2 p-1 text-blue-500 hover:text-blue-700">
                          <FiEdit className="w-4 h-4" />
                        </button>
                      </Link>
                      <button className="p-1 text-red-500 hover:text-red-700">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard; 