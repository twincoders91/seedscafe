import React from "react";
import backArrow from "../assets/menu/images/backarrow.svg";
import "./menuStyles.css";

const MenuCategory = () => {
  return (
    <div className="menu--main--container">
      <div className="menu--top--container">
        <div className="menu--title">Menu Category</div>
        <div className="menu--back--arrow">
          <img scr={backArrow} alt="back"></img>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
