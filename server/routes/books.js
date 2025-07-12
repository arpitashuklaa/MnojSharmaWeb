const express = require('express');
const { auth, adminAuth } = require('../middleware/auth');
const { 
  books, 
  generateId, 
  findBookById, 
  findBookBySlug, 
  generateSlug 
} = require('../data/books');

const router = express.Router();

// Get all books (public)
router.get('/', (req, res) => {
  try {
    const { search, year, genre, sort } = req.query;
    let filteredBooks = [...books];

    // Search by title or author
    if (search) {
      const searchLower = search.toLowerCase();
      filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower) ||
        book.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by year
    if (year) {
      filteredBooks = filteredBooks.filter(book => book.year === year);
    }

    // Filter by genre
    if (genre) {
      filteredBooks = filteredBooks.filter(book => 
        book.genre.toLowerCase().includes(genre.toLowerCase())
      );
    }

    // Sort books
    if (sort) {
      switch (sort) {
        case 'title':
          filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'year':
          filteredBooks.sort((a, b) => b.year.localeCompare(a.year));
          break;
        case 'price':
          filteredBooks.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
          break;
        case 'rating':
          filteredBooks.sort((a, b) => b.rating - a.rating);
          break;
        default:
          filteredBooks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    } else {
      // Default sort by creation date (newest first)
      filteredBooks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    res.json({
      success: true,
      data: filteredBooks,
      total: filteredBooks.length
    });

  } catch (error) {
    console.error('Get books error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch books'
    });
  }
});

// Get book by ID (public)
router.get('/:id', (req, res) => {
  try {
    const book = findBookById(req.params.id);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.json({
      success: true,
      data: book
    });

  } catch (error) {
    console.error('Get book error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch book'
    });
  }
});

// Get book by slug (public)
router.get('/slug/:slug', (req, res) => {
  try {
    const book = findBookBySlug(req.params.slug);
    
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.json({
      success: true,
      data: book
    });

  } catch (error) {
    console.error('Get book by slug error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch book'
    });
  }
});

// Create new book (admin only)
router.post('/', adminAuth, (req, res) => {
  try {
    const {
      title,
      description,
      fullDescription,
      year,
      price,
      rating,
      reviews,
      amazonLink,
      author,
      genre,
      pages,
      language,
      isbn,
      stock,
      format,
      dimensions,
      weight
    } = req.body;

    // Validation
    if (!title || !description || !author || !price) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, description, author, and price'
      });
    }

    // Generate slug from title
    const slug = generateSlug(title);

    // Check if book with same slug already exists
    const existingBook = findBookBySlug(slug);
    if (existingBook) {
      return res.status(400).json({
        success: false,
        message: 'A book with this title already exists'
      });
    }

    // Create new book
    const newBook = {
      id: generateId(),
      title,
      description,
      fullDescription: fullDescription || description,
      year: year || new Date().getFullYear().toString(),
      price: price.startsWith('$') ? price : `$${price}`,
      rating: rating || 5,
      reviews: reviews || 0,
      amazonLink: amazonLink || '',
      author,
      genre: genre || 'General',
      pages: pages || 0,
      language: language || 'English',
      isbn: isbn || '',
      slug,
      stock: stock || 0,
      format: format || 'Paperback',
      dimensions: dimensions || '',
      weight: weight || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    books.push(newBook);

    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: newBook
    });

  } catch (error) {
    console.error('Create book error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create book'
    });
  }
});

// Update book (admin only)
router.put('/:id', adminAuth, (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    const {
      title,
      description,
      fullDescription,
      year,
      price,
      rating,
      reviews,
      amazonLink,
      author,
      genre,
      pages,
      language,
      isbn,
      stock,
      format,
      dimensions,
      weight
    } = req.body;

    // Update book
    const updatedBook = {
      ...books[bookIndex],
      title: title || books[bookIndex].title,
      description: description || books[bookIndex].description,
      fullDescription: fullDescription || books[bookIndex].fullDescription,
      year: year || books[bookIndex].year,
      price: price ? (price.startsWith('$') ? price : `$${price}`) : books[bookIndex].price,
      rating: rating || books[bookIndex].rating,
      reviews: reviews || books[bookIndex].reviews,
      amazonLink: amazonLink || books[bookIndex].amazonLink,
      author: author || books[bookIndex].author,
      genre: genre || books[bookIndex].genre,
      pages: pages || books[bookIndex].pages,
      language: language || books[bookIndex].language,
      isbn: isbn || books[bookIndex].isbn,
      stock: stock !== undefined ? stock : books[bookIndex].stock,
      format: format || books[bookIndex].format,
      dimensions: dimensions || books[bookIndex].dimensions,
      weight: weight || books[bookIndex].weight,
      updatedAt: new Date()
    };

    // Update slug if title changed
    if (title && title !== books[bookIndex].title) {
      updatedBook.slug = generateSlug(title);
    }

    books[bookIndex] = updatedBook;

    res.json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });

  } catch (error) {
    console.error('Update book error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update book'
    });
  }
});

// Delete book (admin only)
router.delete('/:id', adminAuth, (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    const deletedBook = books.splice(bookIndex, 1)[0];

    res.json({
      success: true,
      message: 'Book deleted successfully',
      data: deletedBook
    });

  } catch (error) {
    console.error('Delete book error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete book'
    });
  }
});

// Get books statistics (admin only)
router.get('/admin/stats', adminAuth, (req, res) => {
  try {
    const totalBooks = books.length;
    const totalStock = books.reduce((sum, book) => sum + book.stock, 0);
    const totalValue = books.reduce((sum, book) => {
      const price = parseFloat(book.price.replace('$', ''));
      return sum + (price * book.stock);
    }, 0);

    const booksByYear = books.reduce((acc, book) => {
      acc[book.year] = (acc[book.year] || 0) + 1;
      return acc;
    }, {});

    const booksByGenre = books.reduce((acc, book) => {
      const genres = book.genre.split(',').map(g => g.trim());
      genres.forEach(genre => {
        acc[genre] = (acc[genre] || 0) + 1;
      });
      return acc;
    }, {});

    res.json({
      success: true,
      data: {
        totalBooks,
        totalStock,
        totalValue: totalValue.toFixed(2),
        booksByYear,
        booksByGenre
      }
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch statistics'
    });
  }
});

module.exports = router; 