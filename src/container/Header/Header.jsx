import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="app__wrapper_info ">
        <SubHeading title="chase the new flavour" />
        <h1 className="header-h1">The Key to Fine Dining</h1>
        <p
          className="p__opensans"
          style={{
            margin: "2rem 0",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis
          quis distinctio, a ipsum fugit perspiciatis tempore cumque cum maxime
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="header-img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
