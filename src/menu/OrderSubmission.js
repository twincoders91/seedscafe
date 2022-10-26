import React, { useState } from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import qrcode from "../assets/menu/images/qrcode.svg";
import Slider from "../home/sliderComponent/Slider";
import QRCode from "react-qr-code";
import "./menuStyles.css";
import { Link } from "react-router-dom";

const OrderSubmission = (props) => {
  const tableNumber = () => {
    if (props.tableNumber == "Takeaway") {
      return "Takeaway";
    } else {
      return `Table No. ${props.tableNumber}`;
    }
  };
  return (
    <div className="order--main--container">
      <br />
      <br />
      <div className="order--middle--container">
        <div className="qrcode--container">
          <QRCode
            title="GeeksForGeeks"
            value={`http://localhost:5001/order/id/${props.orderID}`}
            bgColor={"#ece7dc"}
            fgColor={"#4c6029"}
            size={80}
          />
        </div>
        <div className="order--submission--container">
          <p className="order--submission--title">Order List Submitted</p>
          <p className="table--number--subtitle">
            {tableNumber()} | Order No: {props.orderNumber}
          </p>
          <p className="thanks--subtitle">
            Thank you for your order! Please <br /> proceed to the counter to
            make <br />
            payment.{" "}
          </p>
        </div>
        <Link to="/">
          <button className="back--button">Back to Home</button>
        </Link>
      </div>
      <br />
      <div className="order--slider--container">
        <p className="slider--title">You may be interested in:</p>
        <br />
        <Slider />
      </div>
      <br />
    </div>
  );
};

export default OrderSubmission;
