import React from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import starLogo from "../assets/cart/confirmationpage/starlogo.svg";
import Slider from "../home/sliderComponent/Slider";
import { Link } from "react-router-dom";
import "./confirmationStyles.css";

const ConfirmationPage = ({ setMakePayment, setConfirmationPage }) => {
  return (
    <div className="order--main--container">
      <div className="order--top--container">
        <div className="order--back--arrow">
          <Link to="/">
            {" "}
            <img
              src={backarrow}
              alt="back"
              onClick={() => {
                setMakePayment(false);
                setConfirmationPage(false);
              }}
            ></img>
          </Link>
        </div>
      </div>
      <div className="order--middle--container">
        <div className="qrcode--confirmation--container">
          <img className="qrcode" src={starLogo} alt="qrcode"></img>
        </div>
        <div className="order--submission--container">
          <p className="order--submission--title">
            Thank you for <br />
            supporting our artist!
          </p>
          <p className="table--number--subtitle">Order No: 2022231</p>
          <p className="thanks--subtitle">
            We’ve received your order. We’ll ship out
            <br /> your order within the next 3 days.
          </p>
        </div>
        <Link to="/">
          <button
            className="back--button"
            onClick={() => {
              setMakePayment(false);
              setConfirmationPage(false);
            }}
          >
            Back to Home
          </button>
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
export default ConfirmationPage;
