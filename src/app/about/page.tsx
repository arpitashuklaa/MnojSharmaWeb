import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Section 1: About The Author */}
      <section className="bg-gradient-to-b from-amber-700 to-amber-800 text-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
          <div className="flex-shrink-0 w-56 md:w-64">
            <img
              alt="Author portrait photo"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              src="https://storage.googleapis.com/a1aa/image/86b2ec93-4455-493b-da70-d8ed9f7cad6b.jpg"
              width={256}
              height={256}
            />
          </div>
          <div className="flex-1 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              About The Author
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-20 h-[3px] bg-amber-400 rounded" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div className="w-2 h-2 rounded-full bg-amber-400" />
            </div>
            <p className="uppercase text-sm md:text-base font-semibold mb-4 leading-relaxed tracking-wide">
              SENIOR ENGINEERING PROFESSIONAL, AUTHOR, TRAVELER, READER.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Manoj Kumar Sharma was Senior Vice President [Business
              Development] at Electrosteel Castings Limited...
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Manoj Kumar Sharma has been selected among the India Today Group:
              Icons of India. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas, quibusdam perferendis id sequi molestiae sit dolor
              inventore in asperiores aliquid corrupti itaque, rem adipisci ut
              nihil! Optio laudantium provident quae sit qui illum hic, odio,
              voluptate voluptatem necessitatibus quo recusandae consequatur eos
              illo blanditiis rem quod debitis quis nemo est non repudiandae
              temporibus nobis aliquid. Molestiae eum quasi natus ad error
              tempora omnis. Iure minima sunt aspernatur itaque blanditiis rem
              laborum ex, illum saepe praesentium soluta error magnam odit
              accusantium quaerat assumenda ratione at molestias fugit. Alias
              nostrum, minus perferendis ipsam nisi praesentium sunt doloribus,
              illo, quibusdam iure amet dolorem!
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Awards and Literary Works */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="md:w-1/2 text-base md:text-lg leading-relaxed text-amber-900">
            <p className="mb-6">
              Manoj Kumar Sharma has received the Best Author to Watch 2022
              Award...
            </p>
            <p className="mb-6">
              Azteca University, Mexico has conferred an Honorary Doctor of Arts
              to Manoj Kumar Sharma... Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laboriosam non temporibus officiis beatae
              commodi esse dolores eaque quaerat ex. Illum, iure? Fugit earum
              animi ipsa, eaque vero ullam cumque voluptatem! Placeat, ullam
              asperiores! At quod atque earum pariatur nesciunt ducimus saepe
              perspiciatis nulla magni nam. Voluptate nihil repudiandae quae
              aspernatur, omnis voluptates nemo. Laudantium quidem tenetur
              cumque repudiandae similique animi.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              alt="Award group photo"
              className="shadow-xl rounded-lg max-w-full h-auto border-4 border-amber-500"
              src="https://storage.googleapis.com/a1aa/image/fcf21ac4-3e40-40f5-60f6-f37c54754aba.jpg"
              width={500}
              height={325}
            />
          </div>
        </div>
        <div className="mt-16 text-amber-900">
          <p className="mb-6 text-lg md:text-xl font-semibold">
            Sabarna has received the Most Iconic Author of the Year, 2022 from
            the Government of Punjab.
          </p>
          <p className="mb-4 text-lg md:text-xl font-semibold">
            Manoj Kumar Sharma's literary works are:
          </p>
          <ul className="list-disc list-inside mb-8 text-base md:text-lg space-y-2">
            <li>Pentacles Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, commodi?</li>
            <li>Frosted Glass Lorem ipsum dolor sit amet consectetur adipisicing elit. In, earum.</li>
            <li>Abyss Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Winter Poems Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Random Subterranean Mosaic: 2012 – 2018 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Etchings of the First Quarter of 2020 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Fractured Mosaic Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>A Marriage, an Affair, and a Friendship. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Tara and Sandy: Slow Dance of Infinite Stars Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
            <li>Thirty Summer Poems and Conversations about a Murder Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste.</li>
          </ul>
          <p className="mb-4 text-lg md:text-xl font-semibold">
            Manoj Kumar Sharma's technical works are:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg space-y-2">
            <li>
              Articles on Ductile Iron Pipelines and Framework Agreement
              Methodology
            </li>
            <li>
              Technological Trends in Water Sector for a Sustainable Solution
            </li>
            <li>Emerging Environmental Technologies and Policies.</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Awards & Recognition */}
      <section className="bg-gradient-to-b from-amber-50 to-amber-100 py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-amber-900 font-bold text-2xl md:text-3xl mb-4">
            AWARDS &amp; RECOGNITION
          </h3>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-[3px] bg-amber-500 rounded" />
            <div className="w-2 h-2 rounded-full bg-amber-500 mx-2" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500 ml-2" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              "c2196530-78b2-4f1d-473f-cb2fd8779a98",
              "c5a5eb7a-54e4-48c7-9008-4ce857b3acea",
              "004c56ec-d1bb-4451-7697-a9da33a93a97",
              "bda01c96-d247-45e0-6dd9-457a15a3788a",
              "e6a38350-41b8-4e49-0e04-a267d847faab",
              "ce684ad1-08a0-42a2-4ae1-cb598cb0e5a2",
              "6e08ce78-da6d-4bec-35c4-6bba50a957da",
              "76a86088-9dce-48b6-cea1-a64415959a04",
              "e3a7f4a1-6cc7-42f4-9491-dbe7d3d463a4",
            ].map((imgId, index) => (
              <img
                key={index}
                alt={`Award image ${index + 1}`}
                className="w-full h-auto object-contain border-4 border-amber-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                src={`https://storage.googleapis.com/a1aa/image/${imgId}.jpg`}
                width={300}
                height={300}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
