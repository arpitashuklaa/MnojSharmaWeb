'use client'
import React from "react";
import Image from "next/image";
import authorImg from "@/../public/images/author/Authorimg.jpg";
import { motion } from 'framer-motion';
import { FiBook, FiPenTool, FiAward } from 'react-icons/fi';

function AboutAuthor() {
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

  const features = [
    {
      icon: FiBook,
      title: "Published Works",
      description: "Multiple acclaimed poetry collections that have touched readers worldwide"
    },
    {
      icon: FiPenTool,
      title: "Writing Style",
      description: "A unique blend of spiritual wisdom and contemporary expression"
    },
    {
      icon: FiAward,
      title: "Recognition",
      description: "Awarded for outstanding contribution to contemporary poetry"
    }
  ];

  const handleKnowMore = () => {
    alert("More information coming soon!");
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-gradient-to-b from-white to-[var(--background-light)]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 relative"
          >
            About the Author
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 mt-10"
            />
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="relative mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[var(--saffron-primary)] shadow-xl"
            >
              <Image
                src={authorImg}
                alt="Manoj Kumar Sharma"
                // fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-12"
          >
            I am Manoj Kumar Sharma, a poet and author dedicated to exploring the depths of human emotion through words.
            My work reflects the beauty of life, love, and spiritual awakening.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--saffron-light)]"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-[var(--saffron-light)] w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                >
                  <feature.icon className="w-7 h-7 text-[var(--saffron-primary)]" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutAuthor;