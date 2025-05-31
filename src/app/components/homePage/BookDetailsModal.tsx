'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiStar, FiShoppingCart, FiExternalLink } from 'react-icons/fi';

interface BookDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  book: {
    title: string;
    description: string;
    year: string;
    price: string;
    rating: number;
    reviews: number;
    amazonLink?: string;
    fullDescription: string;
    author: string;
    genre: string;
    pages: number;
    language: string;
    isbn: string;
  };
}

const BookDetailsModal = ({ isOpen, onClose, book }: BookDetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-amber-800">{book.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-amber-50 rounded-full transition-colors"
            >
              <FiX className="w-6 h-6 text-amber-800" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Book Info */}
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Book Details</h3>
                  <div className="space-y-3">
                    <p><span className="font-medium">Author:</span> {book.author}</p>
                    <p><span className="font-medium">Genre:</span> {book.genre}</p>
                    <p><span className="font-medium">Published:</span> {book.year}</p>
                    <p><span className="font-medium">Pages:</span> {book.pages}</p>
                    <p><span className="font-medium">Language:</span> {book.language}</p>
                    <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{book.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Reviews</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${i < book.rating ? 'fill-current' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">({book.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Purchase Options */}
              <div className="space-y-6">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Purchase Options</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
                      <FiShoppingCart className="w-5 h-5" />
                      Buy Now - {book.price}
                    </button>
                    {book.amazonLink && (
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Buy on Amazon
                      </a>
                    )}
                  </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4">Preview</h3>
                  <div className="aspect-[3/4] bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-800">Book Preview Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDetailsModal; 