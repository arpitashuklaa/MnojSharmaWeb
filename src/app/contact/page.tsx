'use client';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function ContactPage() {
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
        Get in Touch
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FiMail className="w-6 h-6 text-[var(--saffron-primary)]" />
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Email</h3>
                  <p className="text-[var(--text-secondary)]">contact@manojsharma.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="w-6 h-6 text-[var(--saffron-primary)]" />
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Phone</h3>
                  <p className="text-[var(--text-secondary)]">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FiMapPin className="w-6 h-6 text-[var(--saffron-primary)]" />
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">Location</h3>
                  <p className="text-[var(--text-secondary)]">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--saffron-light)] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[var(--saffron-dark)] mb-4">
              Follow Us
            </h2>
            <p className="text-[var(--text-secondary)] mb-4">
              Stay connected with us on social media for updates and inspiration.
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[var(--text-primary)] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-[var(--saffron-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--saffron-primary)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[var(--text-primary)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[var(--saffron-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--saffron-primary)]"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[var(--text-primary)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-[var(--saffron-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--saffron-primary)]"
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <FiSend className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
} 