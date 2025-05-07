"use client";
import React from "react";
import Image from "next/image";
import { FaBook } from "react-icons/fa";

const PublishedBooks = () => {
  const books = [
    {
      id: 1,
      title: "Me No Pause Me Play",
      description:
        "Sabarna Roy was awarded the Literoma Laureate Award for Fiction in 2019",
      image: "/images/books/book1.jpeg",
      alt: "Book cover showing a man and woman sitting at a table in a cafe",
    },
    {
      id: 2,
      title: "Random Subterranean Mosaic: 2012 – 2018",
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/books/book2.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
    {
      id: 3,
      title: "Frosted Glass",
      description:
        "Frosted Glass comprises one story cycle consisting of 14 stories and 21 poems",
      image: "/images/books/book3.jpeg",
      alt: "Book cover with abstract colored glass window",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-900 to-orange-900 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-6">
        Published Books
      </h2>

      {/* Decorative dots */}
      <div className="flex mb-12">
        <div className="flex space-x-1 items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-amber-500"></div>
          ))}
          <div className="w-20 h-1 rounded bg-amber-500 ml-2"></div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 max-w-7xl w-full">
        {books.map((book) => (
          <div
            key={book.id}
            className="group flex flex-col items-center max-w-xs text-center p-6 rounded-xl transition-all duration-300 hover:bg-amber-800/30 hover:shadow-lg hover:shadow-amber-500/20"
          >
            <div className="relative w-[150px] h-[220px] mb-6 overflow-hidden rounded-lg group-hover:shadow-xl group-hover:shadow-amber-500/30 transition-all duration-300">
              <Image
                src={book.image}
                alt={book.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
            </div>

            <h3 className="font-bold text-amber-100 text-lg mb-3 leading-snug">
              {book.title}
            </h3>

            <p className="text-amber-200 text-sm mb-6 leading-relaxed">
              {book.description}
            </p>

            <a
              href="#"
              className="text-amber-400 text-lg leading-none hover:text-amber-300 transition-colors duration-300"
            >
              →
            </a>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <button className="mt-12 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full px-8 py-3 flex items-center space-x-2 text-white text-sm font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
        <span>EXPLORE BOOKS</span>
        <FaBook className="text-base" />
      </button>
    </div>
  );
};

export default PublishedBooks;
