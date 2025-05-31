"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiShoppingCart, FiExternalLink } from 'react-icons/fi';
import BookDetailsModal from './BookDetailsModal';
import Link from 'next/link';

const PublishedBooks = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);

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

  const books = [
    {
      title: "Pentacles",
      description: "A collection of spiritual poems and reflections that will touch your soul and inspire your journey.",
      year: "2023",
      price: "$19.99",
      rating: 5,
      reviews: 128,
      amazonLink: "https://www.amazon.com/pentacles",
      fullDescription: "Pentacles is a profound exploration of spirituality through poetry. Each poem is crafted with care and insight, offering readers a journey through various aspects of human existence and spiritual growth. The collection combines traditional wisdom with contemporary perspectives, making it accessible to both spiritual seekers and poetry enthusiasts alike.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Spirituality",
      pages: 156,
      language: "English",
      isbn: "978-3-16-148410-0",
      slug: "pentacles"
    },
    {
      title: "Frosted Glass",
      description: "A journey through life's most profound moments, captured in beautiful prose and poetry.",
      year: "2022",
      price: "$24.99",
      rating: 5,
      reviews: 95,
      amazonLink: "https://www.amazon.com/frosted-glass",
      fullDescription: "Frosted Glass presents a unique perspective on life's most significant moments. Through a blend of prose and poetry, the author captures the essence of human experience, from joy to sorrow, from triumph to defeat. The book's title metaphorically represents the way we view life - sometimes clear, sometimes obscured, but always beautiful in its own way.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Prose",
      pages: 184,
      language: "English",
      isbn: "978-3-16-148410-1",
      slug: "frosted-glass"
    },
    {
      title: "Abyss",
      description: "Exploring the depths of human consciousness and the mysteries of existence.",
      year: "2021",
      price: "$21.99",
      rating: 5,
      reviews: 156,
      amazonLink: "https://www.amazon.com/abyss",
      fullDescription: "Abyss delves into the profound depths of human consciousness and existence. This philosophical work combines poetry with deep insights into the nature of reality, consciousness, and the human experience. It challenges readers to question their perceptions and explore the mysteries that lie beneath the surface of everyday life.",
      author: "Manoj Kumar Sharma",
      genre: "Philosophy, Poetry",
      pages: 212,
      language: "English",
      isbn: "978-3-16-148410-2",
      slug: "abyss"
    },
    {
      title: "Winter Poems",
      description: "A seasonal collection of poetic masterpieces that will warm your heart.",
      year: "2020",
      price: "$18.99",
      rating: 5,
      reviews: 87,
      amazonLink: "https://www.amazon.com/winter-poems",
      fullDescription: "Winter Poems is a collection that captures the essence of winter in all its forms - from the physical cold to the metaphorical winters of the soul. Each poem is a masterpiece that combines vivid imagery with deep emotional resonance, creating a reading experience that is both beautiful and profound.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Seasonal",
      pages: 132,
      language: "English",
      isbn: "978-3-16-148410-3",
      slug: "winter-poems"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-[var(--background-light)]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--text-primary)] mb-16 relative"
        >
          Published Books
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 mt-10"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {books.map((book, index) => (
            <Link href={`/books/${book.slug}`} key={book.title}>
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
                      {[...Array(book.rating)].map((_, i) => (
                        <FiBookOpen key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] ml-2">
                      ({book.reviews} reviews)
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedBook(book);
                      }}
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
      </div>

      <BookDetailsModal
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        book={selectedBook || books[0]}
      />
    </motion.section>
  );
};

export default PublishedBooks;
