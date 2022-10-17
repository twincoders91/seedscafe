import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/art/category/backarrow.svg";
import ArtCard from "./ArtCard";
import ArtData from "./artData";
import "./artStyles.css";

const Art = (props) => {
  //======================removing category duplicates from the artData set======================
  const { setArtGalleryHeader, setArtGalleryPopulate } = props;

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

  //==============================================================================================
  //======================function to handle Art Card Category clicks=============================

  const handleArtCardClick = (artData) => {
    setArtGalleryHeader(artData);

    const categoryFilter = ArtData.filter((artGallery) => {
      return artGallery.category === artData.category;
    });

    setArtGalleryPopulate(categoryFilter);
  };

  //===============================================================================================

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
          return (
            <ArtCard
              artName={data.artName}
              description={data.description}
              price={data.price}
              size={data.physicalSize}
              category={data.category}
              image={data.img}
              material={data.physicalSize}
              artistName={data.artistName}
              handleArtCardClick={handleArtCardClick}
              key={Math.random() * 10000}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Art;
