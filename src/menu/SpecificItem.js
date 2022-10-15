import React, { useState } from "react";

import dropdown from "../assets/menu/icon/dropdown.png";
import TableHeader from "./menu-component/shared-componenet/TableHeader";
import "./menuStyles.css";

const SpecificItem = () => {
  const clickedItem = {
    name: "Avocado Toast",
    price: 13.9,
    img: "https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "All Day Breakfast",
    tags: ["Chef's Recommendation", "Healthier Choice"],
  };
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="specific--main--container">
      <TableHeader />
      <div className="specific--list--container">
        <div className="specific--image--container">
          <img src={clickedItem.img} alt={clickedItem.name}></img>
        </div>
        <div className="specific--text--container">
          <h3>{clickedItem.name}</h3>
          <p>{clickedItem.description}</p>
        </div>
        <div className="specific--number--container">
          <div className="specific--quantity--toggle">
            <button>-</button>
            <label>{quantity}</label>
            <button>+</button>
          </div>
          <div className="specific--price">${clickedItem.price * quantity}</div>
        </div>
        <div className="specific--button--container">
          <div className="specific--specialRequest">
            <label>Special Request</label>
            <img src={dropdown} alt="dropdown" />
          </div>
          <div className="specific--addToOrderList">
            <label>Add to Order List</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificItem;
