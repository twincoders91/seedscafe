import React from "react";
import FullMenu from "./fullMenu";
import "./menuStyles.css";

const FilterButtons = ({
  filterDish,
  setDishes,
  menuItems,
  handleCatSelectedChange,
  catSelected,
}) => {
  return (
    <>
      {menuItems.map((dish, id) => {
        return (
          <>
            {dish === catSelected ? (
              <button
                style={{ backgroundColor: "#ece7dc" }}
                className="filter--button"
                onClick={() => {
                  filterDish(dish);
                  handleCatSelectedChange(dish);
                }}
                key={id}
              >
                {dish}
              </button>
            ) : (
              <button
                className="filter--button"
                onClick={() => {
                  filterDish(dish);
                  handleCatSelectedChange(dish);
                }}
                key={id}
              >
                {dish}
              </button>
            )}
          </>
        );
      })}
      {/* <button className="filter--button" onClick={() => setItem(FullMenu)}>
        All
      </button> */}
    </>
  );
};

export default FilterButtons;
