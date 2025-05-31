'use client';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Reader",
    content: "Manoj Kumar Sharma's books have transformed my perspective on life. His words resonate deeply with my soul.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Book Club Member",
    content: "The depth of wisdom in his writings is unparalleled. Each book is a journey of self-discovery.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Literature Enthusiast",
    content: "His work has inspired me to explore spirituality in a whole new way. Truly life-changing!",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Author",
    content: "Manoj Kumar Sharma's unique perspective and writing style have influenced my own work significantly.",
    rating: 5
  }
];

export default function TestimonialsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-[var(--text-primary)] mb-12"
      >
        Reader Testimonials
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FiStar
                  key={i}
                  className="w-5 h-5 text-[var(--saffron-primary)] fill-current"
                />
              ))}
            </div>
            <p className="text-[var(--text-secondary)] mb-4 italic">
              "{testimonial.content}"
            </p>
            <div className="border-t border-[var(--saffron-light)] pt-4">
              <h3 className="font-semibold text-[var(--text-primary)]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-[var(--saffron-primary)]">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
          Share Your Experience
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Have you read any of Manoj Kumar Sharma's books? We'd love to hear your thoughts!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          Write a Review
        </motion.button>
      </motion.div>
    </motion.div>
  );
} 