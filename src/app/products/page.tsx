'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';

const ProductsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const products = [
    {
      title: "Pentacles",
      description: "A collection of spiritual poems and reflections that will touch your soul and inspire your journey.",
      year: "2023",
      price: "$19.99",
      rating: 5,
      reviews: 128,
      slug: "pentacles",
      stock: 50,
      format: "Hardcover"
    },
    {
      title: "Frosted Glass",
      description: "A journey through life's most profound moments, captured in beautiful prose and poetry.",
      year: "2022",
      price: "$24.99",
      rating: 5,
      reviews: 95,
      slug: "frosted-glass",
      stock: 35,
      format: "Paperback"
    },
    {
      title: "Abyss",
      description: "Exploring the depths of human consciousness and the mysteries of existence.",
      year: "2021",
      price: "$21.99",
      rating: 5,
      reviews: 156,
      slug: "abyss",
      stock: 42,
      format: "Hardcover"
    },
    {
      title: "Winter Poems",
      description: "A seasonal collection of poetic masterpieces that will warm your heart.",
      year: "2020",
      price: "$18.99",
      rating: 5,
      reviews: 87,
      slug: "winter-poems",
      stock: 28,
      format: "Paperback"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background-light)] py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--text-primary)] mb-16 relative"
        >
          Our Products
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 mt-10"
          />
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="product-card group bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-[var(--saffron-light)] to-[var(--saffron-primary)] flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FiBookOpen className="w-16 h-16 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--saffron-primary)] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-[var(--saffron-primary)]">
                      {[...Array(product.rating)].map((_, i) => (
                        <FiBookOpen key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] ml-2">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center text-[var(--saffron-primary)]"
                    >
                      <FiCalendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">{product.year}</span>
                    </motion.div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center space-x-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Add to cart functionality here
                      }}
                    >
                      <FiShoppingCart className="w-5 h-5" />
                      <span>{product.price}</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage; 