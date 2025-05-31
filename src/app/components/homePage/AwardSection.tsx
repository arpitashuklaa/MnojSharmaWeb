"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiBookOpen } from 'react-icons/fi';

const AwardSection = () => {
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

  const awards = [
    {
      icon: FiAward,
      title: "Best Poetry Collection",
      description: "Awarded for outstanding contribution to contemporary poetry",
      year: "2023"
    },
    {
      icon: FiStar,
      title: "Literary Excellence",
      description: "Recognized for innovative writing style and profound themes",
      year: "2022"
    },
    {
      icon: FiBookOpen,
      title: "Reader's Choice",
      description: "Voted as the most influential poet of the year",
      year: "2021"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 bg-gradient-to-b from-[var(--background-light)] to-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-[var(--text-primary)] mb-16 relative"
        >
          Awards & Recognition
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 mt-10"
          />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--saffron-light)]"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-[var(--saffron-light)] w-16 h-16 rounded-full flex items-center justify-center mb-6"
              >
                <award.icon className="w-8 h-8 text-[var(--saffron-primary)]" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {award.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {award.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-[var(--saffron-light)] text-[var(--saffron-primary)] px-4 py-2 rounded-full text-sm font-medium"
              >
                {award.year}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-lg text-[var(--text-secondary)] italic"
          >
            "Recognition is not just about awards, but about touching lives through words."
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AwardSection;
