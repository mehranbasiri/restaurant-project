import React from "react";
import { images } from "../../constants";

import { SubHeading } from "../../components";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          iran krj kamalshahr bolv shahrdari golestan 1
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 06 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 04 pm</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Find Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
