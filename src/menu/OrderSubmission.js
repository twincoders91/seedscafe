import React from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import qrcode from "../assets/menu/images/qrcode.svg";
import Slider from "../home/sliderComponent/Slider";
import "./menuStyles.css";
import { Link } from "react-router-dom";

const OrderSubmission = (props) => {
  const { category, image } = props;
  return (
    <div className="order--main--container">
      <div className="order--top--container">
        <div className="order--back--arrow">
          <img src={backarrow} alt="back"></img>
        </div>
      </div>
      <br />
      <br />
      <div className="order--middle--container">
        <div className="qrcode--container">
          <img className="qrcode" src={qrcode} alt="qrcode"></img>
        </div>
        <div className="order--submission--container">
          <p className="order--submission--title">Order List Submitted</p>
          <p className="table--number--subtitle">
            Table No: 8 | Order No: 2022231
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
