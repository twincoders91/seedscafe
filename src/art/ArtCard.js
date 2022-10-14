import React from "react";
import "./artStyles.css";

const ArtCard = (props) => {
  const { category, image } = props;
  return (
    <div className="artCard--container">
      <img src={image} className="artCard--top"></img>
      <div className="artCard--bottom">{category}</div>
    </div>
  );
};

export default ArtCard;
