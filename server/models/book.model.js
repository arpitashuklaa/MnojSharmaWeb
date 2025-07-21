import mongoose from 'mongoose';

// A helper function to generate slugs, similar to the one provided.
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with -
    .replace(/(^-|-$)/g, '');    // Remove leading or trailing -
};

const bookSchema = new mongoose.Schema(
  {
    // Note: MongoDB automatically creates a unique '_id' field.
    // We can omit the custom 'id' field unless it's strictly required.
    title: {
      type: String,
      required: [true, 'Book title is required.'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      // The slug will be generated from the title before saving.
    },
    description: {
      type: String,
      required: [true, 'A short description is required.'],
      trim: true,
    },
    fullDescription: {
      type: String,
      required: [true, 'A full description is required.'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author name is required.'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
      // Storing price as a number is better for calculations.
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    year: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required.'],
      unique: true,
    },
    genre: {
      type: String, // Or [String] if you want to store genres as an array
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      default: 'English',
    },
    format: {
      type: String,
      enum: ['Hardcover', 'Paperback', 'eBook'], // Restricts values to this list
      required: true,
    },
    dimensions: {
      type: String,
    },
    weight: {
      type: String,
    },
    amazonLink: {
      type: String,
    },
  },
  {
    // This option automatically adds `createdAt` and `updatedAt` fields.
    timestamps: true,
  }
);

// Mongoose middleware to automatically generate a slug before saving
bookSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = generateSlug(this.title);
  }
  next();
});

export default mongoose.model('Book', bookSchema);