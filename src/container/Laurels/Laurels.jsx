import React from "react";
import { data, images } from "../../constants";
import "./Laurels.css";
import { SubHeading } from "../../components";
const Awardcards = ({ award }) => (
  <div className="laurels-awards-card">
    <img src={award.imgUrl} alt="ss" />
    <div className="award-card-info">
      <h2 style={{ color: "#DCCA87" }}>{award.title}</h2>
      <p className="p__cormorant">{award.subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="laurels app__bg section__padding">
    <div className="laurels-info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="laurels-awards">
        {data.awards.map((award) => (
          <Awardcards award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="laurels-image">
      <img src={images.laurels} alt="laurels img" />
    </div>
  </div>
);

export default Laurels;
