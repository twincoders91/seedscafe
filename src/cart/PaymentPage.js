import React from "react";
import topRowArrows from "../assets/cart/toprow/toprowarrows.svg";
import masterCard from "../assets/cart/payment/mastercard.svg";
import visaCard from "../assets/cart/payment/visacard.svg";
import shopee from "../assets/cart/payment/shopee.svg";
import grabPay from "../assets/cart/payment/grabpay.svg";

import "./paymentStyles.css";

const PaymentPage = ({ cartArtDetails, donation }) => {
  return (
    <div className="payment--main--container">
      <div className="cart--page--top--row--banner">
        <div className="cart--shipping--payment--buttons--box">
          <button className="cart--shipping--payment--buttons">Cart</button>
          <img
            src={topRowArrows}
            className="cart--shipping--payment--arrow"
            alt="images"
          />
          <button className="cart--shipping--payment--buttons">Shipping</button>
          <img
            src={topRowArrows}
            className="cart--shipping--payment--arrow"
            alt="images"
          />
          <button className="cart--shipping--payment--buttons--clicked">
            Payment
          </button>
        </div>
      </div>
      <div className="payment--top--container">
        <div className="payment--top--container--row1">
          <p>Total</p>
          <p>
            {" "}
            $
            {cartArtDetails ? (
              (
                Number(
                  cartArtDetails
                    .map((item) => item.price)
                    .reduce((prev, curr) => prev + curr, 0)
                ) + Number(donation)
              ).toFixed(2)
            ) : (
              <></>
            )}
          </p>
        </div>
        <hr className="payment--page--horizontal--line1"></hr>
        <div className="payment--top--container--row2">
          {cartArtDetails ? (
            cartArtDetails.map((cartItems) => {
              return (
                <div
                  className="payment--check--items--container"
                  key={Math.random() * 1000}
                >
                  <div className="payment--checkout--item">
                    {cartItems.artName} X1
                  </div>
                  <div className="payment--checkout--item--price">
                    ${cartItems.price.toFixed(2)}
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
          {donation ? (
            <div className="payment--donation--container">
              <p className="payment--donation--amount">Donation</p>
              <p className="payment--donation--amount">{donation}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr className="payment--page--horizontal--line2"></hr>
        <form className="payment--top--container--row3">
          <div className="payment--boxes">
            <div className="payment--method--text--button">
              <input
                type="radio"
                name="card--type"
                className="payment--radio--buttons"
              ></input>
              <p>Credit Card</p>
            </div>
            <div className="payment--method--images--box">
              <img src={visaCard} alt="images" />
              <img
                src={masterCard}
                alt="images"
                className="payment--method--images-mastercard"
              />
            </div>
          </div>

          <div className="payment--boxes">
            <div className="payment--method--text--button">
              <input
                type="radio"
                className="payment--radio--buttons"
                name="card--type"
              ></input>
              <p>GrabPay</p>
            </div>
            <div className="payment--method--images--box">
              <img
                src={grabPay}
                className="payment--method--images-mastercard"
                alt="images"
              />
            </div>
          </div>
          <div className="payment--boxes">
            <div className="payment--method--text--button">
              <input
                type="radio"
                className="payment--radio--buttons"
                name="card--type"
              ></input>
              <p>ShopeePay</p>
            </div>
            <div className="payment--method--images--box">
              <img
                src={shopee}
                className="payment--method--images-mastercard"
                alt="images"
              />
            </div>
          </div>
        </form>
        <div className="payment--terms--and--conditions--box">
          <p className="payment--terms--and--conditions--text">
            Your personal data will be used to process your order, support your
            experience throughout the website, and for other purposes described
            in our privacy policy.
          </p>
        </div>
        <div className="payment--terms--and--conditions--agree--box">
          <input type="radio" className="payment--radio--buttons"></input>
          <p>I have read and agree to the website terms & conditions*,</p>
        </div>
        <button className="checkout--button">Make Payment</button>
      </div>
    </div>
  );
};

export default PaymentPage;
