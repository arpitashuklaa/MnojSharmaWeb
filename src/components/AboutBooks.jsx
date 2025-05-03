import React from "react";
// import "./AboutBooks.css";

import CarouselComponent from "./CarouselComponent"

function AboutBook(){
  return (
    <div className="about-book-container"> 
      <CarouselComponent />  {/* ✅ Only one instance */}
    </div>
  );
}
export default AboutBook;