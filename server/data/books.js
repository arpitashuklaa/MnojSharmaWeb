// Sample books data - in a real app, this would come from a database
let books = [
  {
    id: 1,
    title: "Pentacles",
    description: "A collection of spiritual poems and reflections that will touch your soul and inspire your journey.",
    fullDescription: "Pentacles is a profound exploration of spirituality through poetry. Each poem is crafted with care and insight, offering readers a journey through various aspects of human existence and spiritual growth. The collection combines traditional wisdom with contemporary perspectives, making it accessible to both spiritual seekers and poetry enthusiasts alike.",
    year: "2023",
    price: "$19.99",
    rating: 5,
    reviews: 128,
    amazonLink: "https://www.amazon.com/pentacles",
    author: "Manoj Kumar Sharma",
    genre: "Poetry, Spirituality",
    pages: 156,
    language: "English",
    isbn: "978-3-16-148410-0",
    slug: "pentacles",
    stock: 50,
    format: "Hardcover",
    dimensions: "6 x 9 inches",
    weight: "1.2 lbs",
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-12-20')
  },
  {
    id: 2,
    title: "Frosted Glass",
    description: "A journey through life's most profound moments, captured in beautiful prose and poetry.",
    fullDescription: "Frosted Glass presents a unique perspective on life's most significant moments. Through a blend of prose and poetry, the author captures the essence of human experience, from joy to sorrow, from triumph to defeat. The book's title metaphorically represents the way we view life - sometimes clear, sometimes obscured, but always beautiful in its own way.",
    year: "2022",
    price: "$24.99",
    rating: 5,
    reviews: 95,
    amazonLink: "https://www.amazon.com/frosted-glass",
    author: "Manoj Kumar Sharma",
    genre: "Poetry, Prose",
    pages: 184,
    language: "English",
    isbn: "978-3-16-148410-1",
    slug: "frosted-glass",
    stock: 35,
    format: "Paperback",
    dimensions: "5.5 x 8.5 inches",
    weight: "0.8 lbs",
    createdAt: new Date('2022-06-10'),
    updatedAt: new Date('2023-12-18')
  },
  {
    id: 3,
    title: "Abyss",
    description: "Exploring the depths of human consciousness and the mysteries of existence.",
    fullDescription: "Abyss delves into the profound depths of human consciousness and existence. This philosophical work combines poetry with deep insights into the nature of reality, consciousness, and the human experience. It challenges readers to question their perceptions and explore the mysteries that lie beneath the surface of everyday life.",
    year: "2021",
    price: "$21.99",
    rating: 5,
    reviews: 156,
    amazonLink: "https://www.amazon.com/abyss",
    author: "Manoj Kumar Sharma",
    genre: "Philosophy, Poetry",
    pages: 212,
    language: "English",
    isbn: "978-3-16-148410-2",
    slug: "abyss",
    stock: 42,
    format: "Hardcover",
    dimensions: "6 x 9 inches",
    weight: "1.1 lbs",
    createdAt: new Date('2021-03-22'),
    updatedAt: new Date('2023-12-15')
  },
  {
    id: 4,
    title: "Winter Poems",
    description: "A seasonal collection of poetic masterpieces that will warm your heart.",
    fullDescription: "Winter Poems is a collection that captures the essence of winter in all its forms - from the physical cold to the metaphorical winters of the soul. Each poem is a masterpiece that combines vivid imagery with deep emotional resonance, creating a reading experience that is both beautiful and profound.",
    year: "2020",
    price: "$18.99",
    rating: 5,
    reviews: 87,
    amazonLink: "https://www.amazon.com/winter-poems",
    author: "Manoj Kumar Sharma",
    genre: "Poetry, Seasonal",
    pages: 132,
    language: "English",
    isbn: "978-3-16-148410-3",
    slug: "winter-poems",
    stock: 28,
    format: "Paperback",
    dimensions: "5.5 x 8.5 inches",
    weight: "0.7 lbs",
    createdAt: new Date('2020-11-05'),
    updatedAt: new Date('2023-12-10')
  }
];

// Helper functions
const generateId = () => {
  return Math.max(...books.map(book => book.id)) + 1;
};

const findBookById = (id) => {
  return books.find(book => book.id === parseInt(id));
};

const findBookBySlug = (slug) => {
  return books.find(book => book.slug === slug);
};

const generateSlug = (title) => {
  return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

module.exports = {
  books,
  generateId,
  findBookById,
  findBookBySlug,
  generateSlug
}; 