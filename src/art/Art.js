import React from "react";
import backArrow from "../assets/art/category/backarrow.svg";
import "./artStyles.css";

const Art = () => {
  return (
    <div className="art--main--container">
      <div className="art--top--container">
        <div className="art--title">Artwork Category</div>
        <div className="art--back--arrow">
          <img src={backArrow} alt="images"></img>
        </div>
      </div>
    </div>
  );
};

export default Art;
