'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiVideo, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = () => {
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

  const galleryItems = [
    {
      type: 'image',
      title: 'Book Launch Event',
      description: 'The grand launch of "Pentacles"',
      src: '/images/gallery/book-launch.jpg',
      alt: 'Book Launch Event'
    },
    {
      type: 'video',
      title: 'Author Interview',
      description: 'Exclusive interview with Manoj Kumar Sharma',
      src: '/videos/author-interview.mp4',
      thumbnail: '/images/gallery/interview-thumb.jpg',
      alt: 'Author Interview'
    },
    {
      type: 'image',
      title: 'Poetry Reading',
      description: 'Live poetry reading session',
      src: '/images/gallery/poetry-reading.jpg',
      alt: 'Poetry Reading'
    },
    {
      type: 'video',
      title: 'Book Signing',
      description: 'Meet and greet with readers',
      src: '/videos/book-signing.mp4',
      thumbnail: '/images/gallery/signing-thumb.jpg',
      alt: 'Book Signing'
    },
    {
      type: 'image',
      title: 'Literary Festival',
      description: 'Participation in International Literary Festival',
      src: '/images/gallery/literary-fest.jpg',
      alt: 'Literary Festival'
    },
    {
      type: 'image',
      title: 'Award Ceremony',
      description: 'Receiving the prestigious literary award',
      src: '/images/gallery/award-ceremony.jpg',
      alt: 'Award Ceremony'
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
          Gallery
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 mt-10"
          />
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="aspect-video relative">
                {item.type === 'image' ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--saffron-light)] to-[var(--saffron-primary)] flex items-center justify-center">
                    <FiImage className="w-16 h-16 text-white" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--saffron-light)] to-[var(--saffron-primary)] flex items-center justify-center">
                    <FiVideo className="w-16 h-16 text-white" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--saffron-primary)] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
            >
              <span>Explore More</span>
              <FiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery; 