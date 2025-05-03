import React from "react";
import "./Content.css"
import { Button } from "@mui/material";
import Authorimg from "../images/Authorimg/manoj.jpg"

function Content() {
  console.log("Content component is rendering");
  return (
    <>
      <div className="content">
        <div className="author-content">
          <h1 className="heading-2">About The Author</h1>
          <p className="the-author">A visionary author whose words break barriers, inspire change, and redefine storytelling.</p>
          <p className="the-author">
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
          <p className="the-author">
            Today, Manoj Kumar Sharma is a Best-Selling Author with two
            blockbuster titles under his name. He is a self-styled author, whom
            those stories attract much, which fearlessly break the unwanted laws
            & customs in order to give rise to a new set of more approachable
            laws & customs. Well, his writings are based upon this very
            philosophy only, which the readers can witness in both of his books.
            From his debut title, ‘MIRRRO: At The Weird Wayward’ to his latest
            title, ‘Me No Pause, Me Play’ one can easily experience the depth &
            variety in the author’s writing!
          </p>
          <div className="know-more-button-2"><Button
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
        </div>
        <div className="content-img">
          <img src={Authorimg} alt="Author" className="author-img-2"/>
        </div>
      </div>
    </>
  );
}
export default Content;
