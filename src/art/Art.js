import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/art/category/backarrow.svg";
import ArtCard from "./ArtCard";
// import artCategoryData from "./artCategoryData";
import ArtData from "./artData";
import "./artStyles.css";

const Art = () => {
  console.log(ArtData);

  const artCategoryData = ArtData.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    //returns the item if it matches = true
    // if condition is false, it will return undefined = false
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);

  console.log(artCategoryData);

  return (
    <div className="art--main--container">
      <div className="art--top--container">
        <div className="art--title">Artwork Category</div>
        <Link to="/" className="art--back--arrow">
          <img src={backArrow} alt="images"></img>
        </Link>
      </div>
      <div className="art--middle--container">
        {artCategoryData.map((data) => {
          return <ArtCard category={data.category} image={data.img} />;
        })}
      </div>
    </div>
  );
};

export default Art;
