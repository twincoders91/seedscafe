import React from "react";
import "./menuStyles.css";
import forwardarrow from "../assets/menu/images/forwardarrow.svg";

const Card = (props) => {
  const { dishes, handleMenuPageChange, handleDishSelectedChange } = props;

  return (
    <div className="cards--container">
      <div className="row">
        {dishes.map((dish) => {
          return (
            <div
              className="card--container"
              key={dish.id}
              onClick={() => {
                handleDishSelectedChange(dish);
                handleMenuPageChange("SpecificItem");
              }}
            >
              <div className="card--image">
                <img src={dish.img} alt={dish.name} />
              </div>
              <div className="card--body">
                <div className="card--name">{dish.name}</div>
                <div className="card--price">${dish.price.toFixed(2)}</div>
              </div>
              <div className="card--arrow">
                <img src={forwardarrow} alt="next" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
