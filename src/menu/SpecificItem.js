import React, { useState } from "react";
import TableHeader from "./menu-component/shared-componenet/TableHeader";
import "./menuStyles.css";

const SpecificItem = (props) => {
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

  const handlePlusQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantityChange = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="specific--main--container">
      <TableHeader
        menuPage={props.menuPage}
        handleMenuPageChange={props.handleMenuPageChange}
      />
      <div className="specific--list--container">
        <div className="specific--image--container">
          <img src={props.dishSelected.img} alt={props.dishSelected.name}></img>
        </div>
        <div className="specific--text--container">
          <div className="specific--name--price">
            <h3>{props.dishSelected.name}</h3>
            <h3>${props.dishSelected.price * quantity}</h3>
          </div>
          <p>{props.dishSelected.description}</p>
        </div>
        <div className="specific--special--request">
          <label>Special Request</label>
          <textarea placeholder="Type request here"></textarea>
        </div>
        <div className="specific--number--container">
          <div className="specific--quantity--toggle">
            <button onClick={handleMinusQuantityChange}>-</button>
            <label>{quantity}</label>
            <button onClick={handlePlusQuantityChange}>+</button>
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
