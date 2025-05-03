import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import "./CarouselComponent.css"; // Custom styles

import book1 from "../images/Authorimg/book1.jpeg";
import book2 from "../images/Authorimg/book2.jpeg";
import book3 from "../images/Authorimg/book3.jpeg";
import book4 from "../images/Authorimg/book4.jpeg";

const books = [
  { id: 1, title: "Mirrro", image: book1, description: "A thrilling novel exploring mystery and adventure." },
  { id: 2, title: "Me No Pause Me Play", image: book2, description: "A journey of self-discovery and empowerment." },
  { id: 3, title: "Juuhhhuuuu", image: book3, description: "A fun, engaging book with a unique storyline." },
  { id: 4, title: "Hi God How Are You", image: book4, description: "A spiritual and thought-provoking book." },
];

// Function to group books into sets of 3
const groupBooks = (books, groupSize) => {
  let grouped = [];
  for (let i = 0; i < books.length; i += groupSize) {
    grouped.push(books.slice(i, i + groupSize));
  }
  return grouped;
};

const MyCarousel = () => {
  const groupedBooks = groupBooks(books, 3); // Groups books into sets of 3

  return (
    <div className="carousel-container">
      <h1 className="heading">Published Books</h1>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false} // Hides thumbnail navigation
        showStatus={false} 
        showIndicators={false} 
        emulateTouch={true}
        interval={3000}
        swipeable={true}
        transitionTime={500}
      >
        {groupedBooks.map((group, index) => (
          <div className="slide-group" key={index}>
            {group.map((book) => (
              <div className="book-item" key={book.id}>
                <img src={book.image} alt={book.title} className="book-image" />
                <p className="book-name">{book.title}</p>
                <p className="book-description">{book.description}</p> {/* ✅ Added Description */}
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarousel;