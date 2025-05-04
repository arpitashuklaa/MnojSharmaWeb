import "./HeroSection.css";
import React from "react";
// import CarouselComponent from "./CarouselComponent";
import { Button } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { VisuallyHiddenInput } from "@mui/material";
import Authorimg from "../images/Authorimg/Authorimg.jpeg";

function HeroSection() {
  return (
    <>
      <div className="parent">
        <div className="about">
          <h1 style={{ color: "#ffffff" }}>Most Influential Author</h1>
          <div className="read-about-author">
            <div className="author-quote">
              Destiny has a lot to do with the randomness of life – Manoj Kumar
              Sharma
            </div>
          </div>
          <div className="know-more-button">
            <Button
              variant="contained"
              onClick={() => alert("More about the author coming soon!")}
              sx={{
                borderRadius: "20px",
                padding: "10px 20px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Know More
            </Button>
          </div>
        </div>
        <div className="author-img-container">
          {/* put slider here  */}
          <img src={Authorimg} alt="Author" className="author-img" /> 
        </div>
      </div>
    </>
  );
}

export default HeroSection;
