import React from "react";
import { Link } from "react-router-dom";
import "./artStyles.css";

const ArtCard = (props) => {
  const {
    artName,
    artistName,
    description,
    price,
    size,
    material,
    category,
    image,
    handleArtCardClick,
  } = props;

  return (
    <Link
      to="/artgallery"
      className="artCard--container"
      onClick={() => {
        handleArtCardClick({
          artName,
          artistName,
          description,
          price,
          size,
          material,
          category,
          image,
        });
      }}
    >
      <img src={image} className="artCard--top" alt="images"></img>
      <div className="artCard--bottom">
        <p className="artCard--bottom--text">{category}</p>
      </div>
    </Link>
  );
};

export default ArtCard;
