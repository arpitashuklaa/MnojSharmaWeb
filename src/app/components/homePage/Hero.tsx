"use client";

import React, { useState, useEffect } from "react";
import heroImg from "@/../public/images/author/Authorimg.jpeg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroImg,
      title: "Manoj Kumar Sharma",
      subtitle: "The Most Influential Author of the Decade",
    },
    {
      image: heroImg,
      title: "Manoj Kumar Sharma",
      subtitle: "The Most Influential Author of the Decade",
    },
    {
      image: heroImg,
      title: "Manoj Kumar Sharma",
      subtitle: "The Most Influential Author of the Decade",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-amber-200 to-orange-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-12">
        {/* Text Content - Centered */}
        <div className="md:w-1/2 space-y-6 text-left ml-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800">
            Most Influential Author
          </h1>

          <div className="max-w-lg">
            <p className="text-xl md:text-2xl text-amber-900 italic font-medium">
              "Destiny has a lot to do with the randomness of life"
              <span className="block mt-2 text-lg text-amber-800 not-italic">
                — Manoj Kumar Sharma
              </span>
            </p>
          </div>

          <div className="flex justify-start">
            <button
              onClick={() => alert("More about the author coming soon!")}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-amber-300/50 transition-all duration-300"
            >
              Know More
            </button>
          </div>
        </div>

        {/* Image Container - Centered */}
        <div className="md:w-1/2 flex justify-center  ">
          <div className="relative w-80 h-60 md:w-[100vw] md:h-96 rounded-xl  overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
