import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderCard from "./menu-component/orderList-component/OrderCard";
import backarrow from "../assets/menu/images/backarrow.svg";
import order from "../assets/menu/images/order.svg";
import { useStepContext } from "@mui/material";
import OrderListUpdate from "./OrderListUpdate";

const OrderList = (props) => {
  let totalPrice = 0;
  for (let i = 0; i < props.foodOrder.length; i++) {
    totalPrice =
      totalPrice + props.foodOrder[i].price * props.foodOrder[i].quantity;
  }

  const [isOrderUpdate, setIsOrderUpdate] = useState(false);
  const [dataEdit, setDataEdit] = useState({});
  const [indexEdit, setIndexEdit] = useState();

  const handleSubmitOrderClick = () => {
    let uri = "http://localhost:5006/order/create/";
    props.postToOrderDB(uri, props.foodOrder);

    props.handleOrderPageChange("OrderSubmission");
    props.setMenuPage("MenuCategory");
    props.setFoodOrder([]);
  };

  const handleEditClick = (data, index) => {
    setIsOrderUpdate(true);
    setDataEdit({
      name: data.name,
      price: data.price,
      img: data.img,
      description: data.description,
      quantity: data.quantity,
      specialRequest: data.specialRequest,
    });
    setIndexEdit(index);
  };

  const tableNumber = () => {
    if (props.tableNumber == "Takeaway") {
      return "Takeaway";
    } else {
      return `Table No. ${props.tableNumber}`;
    }
  };

  if (isOrderUpdate === false) {
    return (
      <div className="specific--main--container">
        <div className="table--top--container">
          <div className="menu--back--arrow">
            <Link to="/foodmenu">
              <img src={backarrow} alt="order"></img>
            </Link>
          </div>
          <div className="table--title">{tableNumber()}</div>
          <div className="menu--ordericon">
            <Link to="/foodorder">
              <img src={order} alt="order"></img>
            </Link>
          </div>
        </div>
        <div className="order--list--main--container">
          <div className="order--text--format">
            <label>Your Order List</label>
            {/* <button>Edit</button> */}
          </div>
          <div div className="order--card--container">
            {props.foodOrder.map((data, index) => {
              return (
                <OrderCard
                  data={data}
                  index={index}
                  handleEditClick={handleEditClick}
                />
              );
            })}
          </div>
          <div className="order--text--format order--total">
            <label>Total</label>
            <label>${totalPrice.toFixed(2)}</label>
          </div>
          <div
            className="order--button--container"
            onClick={handleSubmitOrderClick}
          >
            <button className="order--submitOrder">Submit Order List</button>
          </div>
        </div>
      </div>
    );
  } else if (isOrderUpdate === true) {
    return (
      <OrderListUpdate
        dataEdit={dataEdit}
        indexEdit={indexEdit}
        setIsOrderUpdate={setIsOrderUpdate}
        handleUpdateFoodOrder={props.handleUpdateFoodOrder}
        tableNumber={tableNumber()}
      />
    );
  }
};

export default OrderList;
