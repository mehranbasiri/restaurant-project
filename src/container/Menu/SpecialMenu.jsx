import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
const SpecialMenu = () => (
  <div className="specialMenu flex__center section__padding" id="menu">
    <div className="specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="specialMenu-menu">
      <div className="specialMenu-menu-wine flex__center">
        <span className="specialMenu-menu-heading">Wine & Beer</span>
        <div className="specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>
      <div className="specialMenu-menu-img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="specialMenu-menu-cocktails flex__center">
        <span className="specialMenu-menu-heading">Cocktails</span>
        <div className="specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
