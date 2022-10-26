import React, { useState } from "react";
import { Link } from "react-router-dom";
import backarrow from "../assets/menu/images/backarrow.svg";
import order from "../assets/menu/images/order.svg";

const OrderListUpdate = (props) => {
  const handleBackClick = () => {
    props.setIsOrderUpdate(false);
  };
  const [quantity, setQuantity] = useState(props.dataEdit.quantity);
  const [specialRequest, setSpecialRequest] = useState(
    props.dataEdit.specialRequest
  );

  const handlePlusQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantityChange = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleSpecialRequestChange = (event) => {
    setSpecialRequest(event.target.value);
  };

  const handleUpdateClick = () => {
    let updatedData = {
      name: props.dataEdit.name,
      price: parseInt(props.dataEdit.price),
      img: props.dataEdit.img,
      description: props.dataEdit.description,
      quantity: parseInt(quantity),
      specialRequest: specialRequest,
    };

    // console.log(updatedData);
    props.handleUpdateFoodOrder(props.indexEdit, updatedData);
    props.setIsOrderUpdate(false);
  };

  const tableNumber = () => {
    if (props.tableNumber == "Takeaway") {
      return "Takeaway";
    } else {
      return `Table No. ${props.tableNumber}`;
    }
  };

  return (
    <div className="specific--main--container">
      <div className="table--top--container">
        <div className="menu--back--arrow" onClick={handleBackClick}>
          <img src={backarrow} alt="order"></img>
        </div>
        <div className="table--title">{tableNumber()}</div>
        <div className="menu--ordericon" onClick={handleBackClick}>
          <img src={order} alt="order"></img>
        </div>
      </div>
      <div className="specific--list--container">
        <div className="specific--image--container">
          <img src={props.dataEdit.img} alt={props.dataEdit.name}></img>
        </div>
        <div className="specific--text--container">
          <div className="specific--name--price">
            <h3>{props.dataEdit.name}</h3>
            <h3>${props.dataEdit.price}</h3>
          </div>
          <p>{props.dataEdit.description}</p>
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
          <div className="specific--addToOrderList" onClick={handleUpdateClick}>
            <label>Update</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListUpdate;
