import React, { useState } from "react";
import TableHeader from "./menu-component/shared-componenet/TableHeader";
import "./menuStyles.css";

const SpecificItem = () => {
  const clickedItem = {
    name: "Avocado Toast",
    price: 13.9,
    img: "https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_960_720.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
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
          <div className="specific--name--price">
            <h3>{clickedItem.name}</h3>
            <h3>${clickedItem.price * quantity}</h3>
          </div>
          <p>{clickedItem.description}</p>
        </div>
        <div className="specific--special--request">
          <label>Special Request</label>
          <textarea placeholder="Type request here"></textarea>
        </div>
        <div className="specific--number--container">
          <div className="specific--quantity--toggle">
            <button>-</button>
            <label>{quantity}</label>
            <button>+</button>
          </div>
        </div>
        <div className="specific--button--container">
          <div className="specific--addToOrderList">
            <label>Add to Order List</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificItem;
