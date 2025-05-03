import React from "react";
import "./AwardsRecognition.css";  // Create this css too
import awardImage from "../images/Authorimg/award.jpeg"; // 🔥 Put some award image

function AwardsRecognition() {
  return (
    <div className="awards-container">
      <div className="awards-content">
        <h1 className="heading-2">Awards & Recognition</h1>
        <p className="the-author">
          Manoj Kumar Sharma has been recognized multiple times for his outstanding contributions to literature and social thought leadership.
        </p>
        <p className="the-author">
          His books have received awards like "Best Innovative Fiction" and "Outstanding Contribution to Modern Storytelling". 
          His work continues to inspire readers across the globe, breaking traditional barriers and setting new benchmarks.
        </p>
      </div>
      <div className="awards-img">
        <img src={awardImage} alt="Awards" className="award-img-2" />
      </div>
    </div>
  );
}

export default AwardsRecognition;
