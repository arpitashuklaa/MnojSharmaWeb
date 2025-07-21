import Book from '../models/book.model.js';

// Get all books
export const getBooks = async (req, res) => {
  try {
    const { search, year, genre, sort } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    if (year) query.year = Number(year);
    if (genre) query.genre = { $regex: genre, $options: 'i' };
    let booksQuery = Book.find(query);
    if (sort) {
      switch (sort) {
        case 'title': booksQuery = booksQuery.sort({ title: 1 }); break;
        case 'year': booksQuery = booksQuery.sort({ year: -1 }); break;
        case 'price': booksQuery = booksQuery.sort({ price: 1 }); break;
        case 'rating': booksQuery = booksQuery.sort({ rating: -1 }); break;
        default: booksQuery = booksQuery.sort({ createdAt: -1 });
      }
    } else {
      booksQuery = booksQuery.sort({ createdAt: -1 });
    }
    const books = await booksQuery;
    res.json({ success: true, data: books, total: books.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch books', error: error.message });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch book', error: error.message });
  }
};

// Get book by slug
export const getBookBySlug = async (req, res) => {
  try {
    const book = await Book.findOne({ slug: req.params.slug });
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch book', error: error.message });
  }
};

// Create new book (admin only)
export const createBook = async (req, res) => {
  try {
    const data = req.body;
    if (!data.title || !data.description || !data.author || !data.price) {
      return res.status(400).json({ success: false, message: 'Please provide title, description, author, and price' });
    }
    const existingBook = await Book.findOne({ slug: Book.schema.methods.generateSlug ? Book.schema.methods.generateSlug(data.title) : undefined });
    if (existingBook) {
      return res.status(400).json({ success: false, message: 'A book with this title already exists' });
    }
    const book = await Book.create(data);
    res.status(201).json({ success: true, message: 'Book created successfully', data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create book', error: error.message });
  }
};

// Update book (admin only)
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.json({ success: true, message: 'Book updated successfully', data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to update book', error: error.message });
  }
};

// Delete book (admin only)
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
    res.json({ success: true, message: 'Book deleted successfully', data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete book', error: error.message });
  }
};

// Get books statistics (admin only)
export const getBookStats = async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();
    const totalStockAgg = await Book.aggregate([{ $group: { _id: null, total: { $sum: '$stock' } } }]);
    const totalStock = totalStockAgg[0]?.total || 0;
    const totalValueAgg = await Book.aggregate([{ $group: { _id: null, total: { $sum: { $multiply: ['$price', '$stock'] } } } }]);
    const totalValue = totalValueAgg[0]?.total || 0;
    res.json({ success: true, data: { totalBooks, totalStock, totalValue } });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch statistics', error: error.message });
  }
}; 