'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// This would typically come from your database or API
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

const BookPage = ({ params }: { params: { slug: string } }) => {
  const book = books.find(b => b.slug === params.slug);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-amber-800">Book not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background-light)] py-12">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-flex items-center text-amber-800 hover:text-amber-900 mb-8"
        >
          <FiArrowLeft className="w-5 h-5 mr-2" />
          Back to Books
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Book Preview */}
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                <span className="text-amber-800 text-xl font-medium">Book Cover</span>
              </div>
              
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Quick Info</h3>
                <div className="space-y-3">
                  <p><span className="font-medium">Author:</span> {book.author}</p>
                  <p><span className="font-medium">Genre:</span> {book.genre}</p>
                  <p><span className="font-medium">Published:</span> {book.year}</p>
                  <p><span className="font-medium">Pages:</span> {book.pages}</p>
                  <p><span className="font-medium">Language:</span> {book.language}</p>
                  <p><span className="font-medium">ISBN:</span> {book.isbn}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Book Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-amber-800 mb-4">{book.title}</h1>
                <div className="flex items-center mb-6">
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
                <p className="text-gray-700 leading-relaxed">{book.fullDescription}</p>
              </div>

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
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Book Preview</h3>
                <p className="text-gray-700 mb-4">Read the first chapter and get a taste of the book's style and content.</p>
                <button className="text-amber-600 hover:text-amber-700 font-medium">
                  Read Preview →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookPage; 