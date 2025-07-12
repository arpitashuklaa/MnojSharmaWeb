"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiShoppingCart, FiExternalLink } from 'react-icons/fi';
import BookDetailsModal from './BookDetailsModal';
import Link from 'next/link';
import { useCart } from '../CartContext';
import { booksAPI } from '../../services/api';

const PublishedBooks = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await booksAPI.getAll();
      if (response.data.success) {
        setBooks(response.data.data);
      } else {
        setError('Failed to fetch books');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Failed to load books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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

  const handleAddToCart = async (e: React.MouseEvent, book: any) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await addToCart(book);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-[var(--background-light)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--saffron-primary)] mx-auto"></div>
            <p className="mt-4 text-[var(--text-secondary)]">Loading books...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-[var(--background-light)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchBooks}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 bg-[var(--background-light)]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Published Books
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore my collection of published works, each offering unique insights and perspectives on life, spirituality, and human experience.
          </p>
        </motion.div>

        {books.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)]">No books available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <Link href={`/published-book/${book.slug}`} key={book.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="book-card group bg-white cursor-pointer"
                >
                  <div className="book-image">
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
                  
                  <div className="book-content">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--saffron-primary)] transition-colors duration-300">
                      {book.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">
                      {book.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="flex text-[var(--saffron-primary)]">
                        {[...Array(book.rating || 5)].map((_, i) => (
                          <FiBookOpen key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-[var(--text-secondary)] ml-2">
                        ({book.reviews || 0} reviews)
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center text-[var(--saffron-primary)]"
                      >
                        <FiCalendar className="w-5 h-5 mr-2" />
                        <span className="font-medium">{book.year}</span>
                      </motion.div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center space-x-2"
                        onClick={(e) => handleAddToCart(e, book)}
                      >
                        <FiShoppingCart className="w-5 h-5" />
                        <span>{book.price}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {selectedBook && (
        <BookDetailsModal
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
          book={selectedBook}
        />
      )}
    </motion.section>
  );
};

export default PublishedBooks;
