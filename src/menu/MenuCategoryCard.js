import React from "react";

const MenuCategoryCard = (props) => {
  const { category, image, handleMenuPageChange, handleCatSelectedChange } =
    props;

  const handleMenuCardClick = () => {
    handleMenuPageChange("Menu");
    handleCatSelectedChange(category);
  };

  return (
    <div className="menuCard--container" onClick={handleMenuCardClick}>
      <div className="menuCard--top">
        <img src={image}></img>
      </div>

      <div className="menuCard--bottom">{category}</div>
    </div>
  );
};

export default MenuCategoryCard;
