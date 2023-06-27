import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="img G" />
    </div>
    <div className="aboutus-content flex__center ">
      <div className="aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis
          quis distinctio, a ipsum fugit perspiciatis tempore cumque cum maxime
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="aboutus-content-knife flex__center">
        <img src={images.knife} alt="images knife" />
      </div>
      <div className="aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-spoon" className="spoon__img rotate-spoon" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi debitis
          quis distinctio, a ipsum fugit perspiciatis tempore cumque cum maxime
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
