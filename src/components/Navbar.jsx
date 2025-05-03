import React from "react";
import { Button } from "@mui/material";
import "./Navbar.css";
// sx={{ backgroundColor: "#ff9933", top: 0, width: "100%" }} position="fixed" 
const Navbar = () => {
  return (
    <div className="navbar-container">
        {/* Brand Name */}
        <div className="author-name">
          Manoj Kumar Sharma
        </div>

        <div className="button-container">
        <Button className="action-button" sx={{ textTransform: "none" }}>Home</Button>
          <Button className="action-button" sx={{ textTransform: "none" }}>About me</Button>
          <Button className="action-button" sx={{ textTransform: "none" }}>Buy</Button>
          <Button className="action-button" sx={{ textTransform: "none" }}>Testimonials</Button>
          <Button className="action-button" sx={{ textTransform: "none" }}>Contact</Button>
        </div>
    </div>
  );
};

export default Navbar;
