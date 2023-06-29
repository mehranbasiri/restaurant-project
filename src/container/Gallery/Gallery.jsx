import React, { useRef } from "react";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import "./Gallery.css";
const imagesAll = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  console.log(imagesAll);
  return (
    <div className="gallary flex__center">
      <div className="gallary-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Galllary</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem
          repudiandae, cumque obcaecati veritatis tempore, quis optio labore,
          dolor laboriosam facere reprehenderit nisi?
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="gallary-images">
        <div className="gallary-images-container" ref={scrollRef}>
          {imagesAll.map((img, index) => (
            <div
              className="gallary-images-card flex__center"
              key={`gallary-image-${index + 1}`}
            >
              <img src={img} alt="gallary" />

              <BsInstagram className="gallary-image-icon" />
            </div>
          ))}
        </div>
        <div className="gallary-images-arrow">
          <BsArrowLeftShort
            className="gallary-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallary-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
