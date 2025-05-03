import "./AboutAuthor.css";
import React from "react";
// import CarouselComponent from "./CarouselComponent";
import { Button } from "@mui/material";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { VisuallyHiddenInput } from "@mui/material";
import Authorimg from "../images/Authorimg/Authorimg.jpeg";

function AboutAuthor() {
  return (
    <>
    <div className="parent">
      <div className="about">
      Most <br/>
      Influential <br/>
      Author
      
      </div>
      <div className="author-img-container">
      <img src={Authorimg} alt="Author" className="author-img" />
      </div>
    </div>
    <div className="read-about-author">
        <div className="know-more-button"><Button
          component="label"
          variant="contained"
          // startIcon={<CloudUploadIcon />}
        >
          Know more
          <input
            type="file"
            multiple
            hidden
            onChange={(event) => console.log(event.target.files)}
          />
        </Button>
        </div>
        <div className="author-quote">
        Destiny has a lot to do with the randomness of life – Manoj Kumar Sharma
        </div>
      </div>
      

    </>
  );
}

export default AboutAuthor;
