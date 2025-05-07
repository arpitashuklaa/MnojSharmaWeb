"use client";

import React from "react";
import Image from "next/image";

export default function AwardSection() {
  const awards = [
    {
      id: 1,
      description:
        "Manoj Kumar Sharma Discusses his Novel ‘Mirrro at the Weird Wayward’ and Stories from his Life",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Book cover showing a man and woman sitting at a table in a cafe",
    },
    {
      id: 2,
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
    {
      id: 3,
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
    {
      id: 4,
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
    {
      id: 5,
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
    {
      id: 6,
      description:
        "Random Subterranean Mosaic: 2012–2018 is a kaleidoscope of random, yet mysterious...",
      image: "/images/awards/author-manoj-sharma.jpeg",
      alt: "Black and white book cover with shadow of a person walking",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-600 to-amber-500 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-6">
        Awards And Recognizations
      </h2>
      <div className="flex mb-12">
        <div className="flex space-x-1 items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-amber-900"></div>
          ))}
          <div className="w-20 h-1 rounded bg-amber-900 ml-2"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full mx-auto">
        {awards.map((book) => (
          <div
            key={book.id}
            className="group flex flex-col items-center max-w-xs text-center p-6 rounded-xl transition-all duration-300 hover:bg-amber-800/30 hover:shadow-lg hover:shadow-amber-500/20 mx-auto"
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
    </div>
  );
}
