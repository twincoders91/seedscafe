import React from "react";
import FullMenu from "./fullMenu";
import "./menuStyles.css";

const FilterButtons = ({ filterDish, menuItems }) => {
  return (
    <>
      {menuItems.map((dish, id) => {
        return (
          <button
            className="filter--button"
            onClick={() => filterDish(dish)}
            key={id}
          >
            {dish}
          </button>
        );
      })}
      {/* <button className="filter--button" onClick={() => setItem(FullMenu)}>
        All
      </button> */}
    </>
  );
};

export default FilterButtons;
