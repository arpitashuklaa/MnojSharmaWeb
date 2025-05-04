import React, { useState } from "react";
import {
  Button,
  IconButton,
  Drawer,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navItems = ["Home", "About Me", "Buy", "Testimonials", "Contact" ];

  const toggleDrawer = () => setOpenNav(!openNav);

  return (
   <div className="nav-full">
     <div className="navbar-container">
      <div className="author-name">Manoj Kumar Sharma</div>

      <div className="button-container">
        {navItems.map((item) => (
          <Button
            key={item}
            className="action-button"
            sx={{ textTransform: "none" }}
          >
            {item}
          </Button>
        ))}
      </div>
            {/* <div className="button-container">
        <Button className="action-button" sx={{ textTransform: "none" }}>
          Home
        </Button>
        <Button className="action-button" sx={{ textTransform: "none" }}>
          About me
        </Button>
        <Button className="action-button" sx={{ textTransform: "none" }}>
          Buy
        </Button>
        <Button className="action-button" sx={{ textTransform: "none" }}>
          Testimonials
        </Button>
        <Button className="action-button" sx={{ textTransform: "none" }}>
          Contact
        </Button>
      </div> */}

      <IconButton className="menu-icon" onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "#fff", fontSize: 30 }} />
      </IconButton>

      <Drawer anchor="right" open={openNav} onClose={toggleDrawer}>
        <div className="drawer-header">
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {navItems.map((text) => (
            <ListItem button key={text} onClick={toggleDrawer}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
   </div>
  );
};

export default Navbar;
