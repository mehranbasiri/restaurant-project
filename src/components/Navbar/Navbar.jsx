import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => (
  <div className="navbar">
    <div className="navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="navbar-links">
      <li className="p__opensans">
        <a href="#home">Home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">About</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">Menu</a>
      </li>
      <li className="p__opensans">
        <a href="#awards">Awards</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <div className="navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      <a href="#" className="p__opensans">
        Book Table
      </a>
    </div>
    <div className="navbar-smallscreen">
      <GiHamburgerMenu color="#ffff" fontSize={27} onClick={() => {}} />
      <div className="navbar-smallscreen-overly flex__center slide-bottem">
        <MdOutlineRestaurantMenu
          fontSize={27}
          className="overly__close"
          onClick={() => {}}
        />

        <ul className="navbar-smallscreen-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
