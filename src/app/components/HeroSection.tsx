'use client'

"use client";
import React from "react";
import heroImg from "../../../public/images/author/Authorimg.jpeg";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gradient-to-br from-amber-200 to-orange-300">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-12">
        {/* Text Content - Centered */}
        <div className="md:w-1/2 space-y-6 text-left ml-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-800">
            Most Influential Author
          </h1>

          <div className="max-w-lg ">
            <p className="text-xl md:text-2xl text-amber-900  italic font-medium">
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
        <div className="md:w-1/2  flex justify-center">
          <div className="relative w-80 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-2xl border-8 border-amber-50">
            <Image
              src={heroImg}
              alt="Author"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-amber-700/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;