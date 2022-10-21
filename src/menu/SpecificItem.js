import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableHeader from "./menu-component/shared-componenet/TableHeader";
import "./menuStyles.css";

const SpecificItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [specialRequest, setSpecialRequest] = useState("");

  const handlePlusQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantityChange = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrderClick = () => {
    const newOrder = {
      name: props.dishSelected.name,
      price: parseInt(props.dishSelected.price),
      img: props.dishSelected.img,
      quantity: parseInt(quantity),
      specialRequest: specialRequest,
    };
    console.log(newOrder);
    props.handleAddFoodOrder(newOrder);
    props.handleMenuPageChange("Menu");

    setQuantity("1");
    setSpecialRequest("");
  };

  const handleSpecialRequestChange = (event) => {
    setSpecialRequest(event.target.value);
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
          <textarea
            placeholder="Type request here"
            type="text"
            onChange={handleSpecialRequestChange}
            value={specialRequest}
          ></textarea>
        </div>
        <div className="specific--number--container">
          <div className="specific--quantity--toggle">
            <button onClick={handleMinusQuantityChange}>-</button>
            <label>{quantity}</label>
            <button onClick={handlePlusQuantityChange}>+</button>
          </div>
        </div>
        <div className="specific--button--container">
          <Link to="/foodorder">
            <div
              className="specific--addToOrderList"
              onClick={handleOrderClick}
            >
              <label>Add to Order List</label>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificItem;
