'use client'
import React from "react";
import Image from "next/image";
import authorImg from "../../../public/images/author/Authorimg.jpg";

function AboutAuthor() {
  const handleKnowMore = () => {
    alert("More information coming soon!");
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Image - Now shown on all screens but order changes */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl border-8 border-amber-50">
            <Image
              src={authorImg}
              alt="Manoj Kumar Sharma - Best Selling Author"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-amber-700/10 to-transparent mix-blend-multiply"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 order-1 lg:order-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800">
            About The Author
          </h1>
          <p className="text-lg md:text-xl text-amber-900 font-medium">
            A visionary author whose words break barriers, inspire change, and redefine storytelling.
          </p>
          <div className="space-y-3 md:space-y-4 text-amber-900">
            <p className="text-base md:text-lg">
              Manoj Kumar Sharma, who is a Civil Engineer by profession, has spent
              31 long years working in MNCs. He belongs to Thane, Maharashtra and
              over the course of years he experienced the various shades of the
              life as his journey of life has been somewhat like snakes & ladder.
              Well, his journey from a corporate person to an author is indeed
              inspiring and is something that makes him a true achiever. It is
              interesting to note that Author Manoj has a natural taste for
              fiction writings and he has always looked for out of the box
              solutions for the perennial social problems.
            </p>
            <p className="text-base md:text-lg">
              Today, Manoj Kumar Sharma is a Best-Selling Author with two
              blockbuster titles under his name. He is a self-styled author, whom
              those stories attract much, which fearlessly break the unwanted laws
              & customs in order to give rise to a new set of more approachable
              laws & customs. Well, his writings are based upon this very
              philosophy only, which the readers can witness in both of his books.
              From his debut title, 'MIRRRO: At The Weird Wayward' to his latest
              title, 'Me No Pause, Me Play' one can easily experience the depth &
              variety in the author's writing!
            </p>
          </div>
          <button
            onClick={handleKnowMore}
            className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-medium text-base md:text-lg shadow-lg hover:shadow-amber-300/50 transition-all duration-300 hover:-translate-y-1"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutAuthor;