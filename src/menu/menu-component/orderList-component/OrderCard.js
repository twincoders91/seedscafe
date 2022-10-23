import React from "react";

const OrderCard = (props) => {
  const handleClick = () => {
    props.handleEditClick(props.data, props.index);
  };
  return (
    <div className="single--orderCard--container" onClick={handleClick}>
      <div className="orderCard--image">
        <img src={props.data.img} alt="" />
      </div>
      <div className="orderCard--text">
        <div className="orderCard--title">
          <label className="orderCard--name">{props.data.name}</label>
          <label>${props.data.price * props.data.quantity}</label>
        </div>
        <div className="orderCard--qty">
          <p>Qty: {props.data.quantity}</p>
        </div>
        <div className="orderCard--request">
          <p>Special Request: {props.data.specialRequest}</p>
        </div>
        {/* <div className="orderCard--edit" >
          Edit
        </div> */}
      </div>

      <div className="orderCard--price"></div>
    </div>
  );
};

export default OrderCard;
