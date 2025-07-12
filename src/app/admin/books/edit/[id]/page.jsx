'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSave, FiArrowLeft, FiBookOpen, FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import AdminLayout from '../../../../components/AdminLayout';

export default function EditBook() {
  const router = useRouter();
  const params = useParams();
  const bookId = params.id;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    year: '',
    price: '',
    rating: 5,
    reviews: 0,
    amazonLink: '',
    author: 'Manoj Kumar Sharma',
    genre: '',
    pages: '',
    language: 'English',
    isbn: '',
    slug: '',
    stock: 0,
    format: 'Paperback',
    dimensions: '',
    weight: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample books data - in a real app, this would come from an API
  const sampleBooks = [
    {
      id: 1,
      title: "Pentacles",
      description: "A collection of spiritual poems and reflections that will touch your soul and inspire your journey.",
      year: "2023",
      price: "$19.99",
      rating: 5,
      reviews: 128,
      amazonLink: "https://www.amazon.com/pentacles",
      fullDescription: "Pentacles is a profound exploration of spirituality through poetry. Each poem is crafted with care and insight, offering readers a journey through various aspects of human existence and spiritual growth.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Spirituality",
      pages: 156,
      language: "English",
      isbn: "978-3-16-148410-0",
      slug: "pentacles",
      stock: 50,
      format: "Hardcover",
      dimensions: "6 x 9 inches",
      weight: "1.2 lbs"
    },
    {
      id: 2,
      title: "Frosted Glass",
      description: "A journey through life's most profound moments, captured in beautiful prose and poetry.",
      year: "2022",
      price: "$24.99",
      rating: 5,
      reviews: 95,
      amazonLink: "https://www.amazon.com/frosted-glass",
      fullDescription: "Frosted Glass presents a unique perspective on life's most significant moments. Through a blend of prose and poetry, the author captures the essence of human experience.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Prose",
      pages: 184,
      language: "English",
      isbn: "978-3-16-148410-1",
      slug: "frosted-glass",
      stock: 35,
      format: "Paperback",
      dimensions: "5.5 x 8.5 inches",
      weight: "0.8 lbs"
    },
    {
      id: 3,
      title: "Abyss",
      description: "Exploring the depths of human consciousness and the mysteries of existence.",
      year: "2021",
      price: "$21.99",
      rating: 5,
      reviews: 156,
      amazonLink: "https://www.amazon.com/abyss",
      fullDescription: "Abyss delves into the profound depths of human consciousness and existence. This philosophical work combines poetry with deep insights into the nature of reality.",
      author: "Manoj Kumar Sharma",
      genre: "Philosophy, Poetry",
      pages: 212,
      language: "English",
      isbn: "978-3-16-148410-2",
      slug: "abyss",
      stock: 42,
      format: "Hardcover",
      dimensions: "6 x 9 inches",
      weight: "1.1 lbs"
    },
    {
      id: 4,
      title: "Winter Poems",
      description: "A seasonal collection of poetic masterpieces that will warm your heart.",
      year: "2020",
      price: "$18.99",
      rating: 5,
      reviews: 87,
      amazonLink: "https://www.amazon.com/winter-poems",
      fullDescription: "Winter Poems is a collection that captures the essence of winter in all its forms - from the physical cold to the metaphorical winters of the soul.",
      author: "Manoj Kumar Sharma",
      genre: "Poetry, Seasonal",
      pages: 132,
      language: "English",
      isbn: "978-3-16-148410-3",
      slug: "winter-poems",
      stock: 28,
      format: "Paperback",
      dimensions: "5.5 x 8.5 inches",
      weight: "0.7 lbs"
    }
  ];

  useEffect(() => {
    // Simulate loading book data from API
    const loadBook = async () => {
      setIsLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const book = sampleBooks.find(b => b.id === parseInt(bookId));
        if (book) {
          setFormData(book);
        } else {
          // Handle book not found
          router.push('/admin/books');
        }
      } catch (error) {
        console.error('Error loading book:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (bookId) {
      loadBook();
    }
  }, [bookId, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({
        ...prev,
        slug: slug
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send this data to your API
      console.log('Updated book data:', formData);
      
      // Redirect to books list
      router.push('/admin/books');
    } catch (error) {
      console.error('Error updating book:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book? This action cannot be undone.')) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // In a real app, you would send delete request to your API
        console.log('Deleting book:', bookId);
        
        // Redirect to books list
        router.push('/admin/books');
      } catch (error) {
        console.error('Error deleting book:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="py-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading book details...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/admin/books">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
                  >
                    <FiArrowLeft className="w-5 h-5" />
                  </motion.button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Edit Book</h1>
                  <p className="mt-2 text-gray-600">Update book information and details</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDelete}
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiTrash2 className="w-4 h-4" />
                  Delete Book
                </motion.button>
                <div className="flex items-center space-x-2 text-amber-600">
                  <FiBookOpen className="w-6 h-6" />
                  <span className="font-medium">Book Management</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Book Title *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter book title"
                      />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Short Description *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Brief description of the book"
                      />
                    </div>

                    <div>
                      <label htmlFor="fullDescription" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Description
                      </label>
                      <textarea
                        id="fullDescription"
                        name="fullDescription"
                        value={formData.fullDescription}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Detailed description of the book"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                          Publication Year *
                        </label>
                        <input
                          type="number"
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          required
                          min="1900"
                          max="2030"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="2023"
                        />
                      </div>

                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                          Price *
                        </label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="$19.99"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                          Rating
                        </label>
                        <input
                          type="number"
                          id="rating"
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          min="1"
                          max="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="reviews" className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Reviews
                        </label>
                        <input
                          type="number"
                          id="reviews"
                          name="reviews"
                          value={formData.reviews}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                        Author *
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Author name"
                      />
                    </div>

                    <div>
                      <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-2">
                        Genre *
                      </label>
                      <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="e.g., Poetry, Spirituality"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pages" className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Pages
                        </label>
                        <input
                          type="number"
                          id="pages"
                          name="pages"
                          value={formData.pages}
                          onChange={handleChange}
                          min="1"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="156"
                        />
                      </div>

                      <div>
                        <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <input
                          type="text"
                          id="language"
                          name="language"
                          value={formData.language}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="English"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-2">
                        ISBN
                      </label>
                      <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="978-3-16-148410-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="auto-generated from title"
                      />
                    </div>
                  </div>
                </div>

                {/* Physical Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Physical Details</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="format" className="block text-sm font-medium text-gray-700 mb-2">
                          Format
                        </label>
                        <select
                          id="format"
                          name="format"
                          value={formData.format}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        >
                          <option value="Paperback">Paperback</option>
                          <option value="Hardcover">Hardcover</option>
                          <option value="E-book">E-book</option>
                          <option value="Audiobook">Audiobook</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                          Stock Quantity
                        </label>
                        <input
                          type="number"
                          id="stock"
                          name="stock"
                          value={formData.stock}
                          onChange={handleChange}
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700 mb-2">
                        Dimensions
                      </label>
                      <input
                        type="text"
                        id="dimensions"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="6 x 9 inches"
                      />
                    </div>

                    <div>
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
                        Weight
                      </label>
                      <input
                        type="text"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="1.2 lbs"
                      />
                    </div>
                  </div>
                </div>

                {/* External Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">External Links</h3>
                  
                  <div>
                    <label htmlFor="amazonLink" className="block text-sm font-medium text-gray-700 mb-2">
                      Amazon Link
                    </label>
                    <input
                      type="url"
                      id="amazonLink"
                      name="amazonLink"
                      value={formData.amazonLink}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="https://www.amazon.com/book-link"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-end space-x-4">
                <Link href="/admin/books">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </motion.button>
                </Link>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSave className="w-5 h-5" />
                  {isSubmitting ? 'Saving...' : 'Update Book'}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </AdminLayout>
  );
}