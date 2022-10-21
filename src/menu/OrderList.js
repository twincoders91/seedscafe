import React from "react";
import { Link } from "react-router-dom";
import OrderCard from "./menu-component/orderList-component/OrderCard";
// import TableHeader from "./menu-component/shared-componenet/TableHeader";
import backarrow from "../assets/menu/images/backarrow.svg";
import order from "../assets/menu/images/order.svg";

const OrderList = (props) => {
  let totalPrice = 0;
  for (let i = 0; i < props.foodOrder.length; i++) {
    totalPrice =
      totalPrice + props.foodOrder[i].price * props.foodOrder[i].quantity;
    console.log(props.foodOrder[i].price);
    console.log(props.foodOrder[i].quantity);
  }
  return (
    <div className="specific--main--container">
      <div className="table--top--container">
        <div className="menu--back--arrow">
          <Link to="/foodmenu">
            <img src={backarrow} alt="order"></img>
          </Link>
        </div>
        <div className="table--title">Table No. 8</div>
        <div className="menu--ordericon">
          <Link to="/foodorder">
            <img src={order} alt="order"></img>
          </Link>
        </div>
      </div>
      <div className="order--list--main--container">
        <div className="order--text--format">
          <label>Your Order List</label>
          <button>Edit</button>
        </div>
        <div div className="order--card--container">
          {props.foodOrder.map((data, index) => {
            return <OrderCard data={data} index={index} />;
          })}
        </div>
        <div className="order--text--format order--total">
          <label>Total</label>
          <label>${totalPrice}</label>
        </div>
        <div
          className="order--button--container"
          onClick={() => {
            props.handleOrderPageChange("OrderSubmission");
          }}
        >
          <button className="order--submitOrder">Submit Order List</button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
