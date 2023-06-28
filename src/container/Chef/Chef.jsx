import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="chef-content">
        <div className="chef-content-quote">
          <img src={images.quote} alt="quote img" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            doloribus
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          doloribusLorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          doloribusLorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
          doloribus
        </p>
      </div>
      <div className="chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Foinder</p>
        <img src={images.sign} alt="sign img" />
      </div>
    </div>
  </div>
);

export default Chef;
