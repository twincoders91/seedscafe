import React from "react";

const MenuCategoryCard = (props) => {
  const { category, image } = props;
  return (
    <div className="menuCard--container">
      <img src={image} className="menuCard--top"></img>
      <div className="menuCard--bottom">{category}</div>
    </div>
  );
};

export default MenuCategoryCard;
