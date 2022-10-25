import React, { useState } from "react";
import topRowArrows from "../assets/cart/toprow/toprowarrows.svg";
import masterCard from "../assets/cart/payment/mastercard.svg";
import visaCard from "../assets/cart/payment/visacard.svg";
import shopee from "../assets/cart/payment/shopee.svg";
import grabPay from "../assets/cart/payment/grabpay.svg";
import "./paymentStyles.css";

const PaymentPage = ({
  cartArtDetails,
  donation,
  setMakePayment,
  setCheckOut,
  setConfirmationPage,
  roundUpValue,
  setCartArtDetails,
  setShoppingCartNumber,
}) => {
  const [check, setCheck] = useState(false);
  const [tncCheck, setTncCheck] = useState(false);
  const [cardDetails, setCardDetails] = useState(false);

  console.log({ cartArtDetails });

  const updateToSold = async (id) => {
    const res = await fetch("http://127.0.0.1:5006/artwork/update", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({ id, sold: true }),
    });
  };

  const handleMakePayment = () => {
    for (let i = 0; i < cartArtDetails.length; i++) {
      updateToSold(cartArtDetails[i].id);
    }
    setConfirmationPage(true);
    // setMakePayment(false);
    setCheck(false);
    setTncCheck(false);
    setCardDetails(false);
    setCartArtDetails([]);
    setShoppingCartNumber("none");
  };

  return (
    <div className="payment--main--container">
      <div className="cart--page--top--row--banner">
        <div className="cart--shipping--payment--buttons--box">
          <button
            className="cart--shipping--payment--buttons"
            onClick={() => {
              setCheckOut(true);
            }}
          >
            Cart
          </button>
          <img
            src={topRowArrows}
            className="cart--shipping--payment--arrow"
            alt="images"
          />
          <button
            className="cart--shipping--payment--buttons"
            onClick={() => {
              setMakePayment(false);
            }}
          >
            Shipping
          </button>
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
                ) +
                Number(donation) +
                Number(roundUpValue)
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
              <p className="payment--donation--amount">
                ${Number(donation).toFixed(2)}
              </p>
            </div>
          ) : roundUpValue ? (
            <div className="payment--donation--container">
              <p className="payment--donation--amount">Donation</p>
              <p className="payment--donation--amount">
                ${Number(roundUpValue).toFixed(2)}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr className="payment--page--horizontal--line2"></hr>
        <form className="payment--top--container--row3">
          <div className="payment--boxes">
            <div className="payment--method--text--button--container">
              <div className="payment--method--text--button">
                <input
                  type="radio"
                  name="card--type"
                  className="payment--radio--buttons"
                  onClick={() => {
                    setCheck(true);
                    setCardDetails(true);
                  }}
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
            {cardDetails ? (
              <div className="card--details--input--main--container">
                <div className="card--details--input--container">
                  <input
                    placeholder="Card Number"
                    className="card--details--input"
                    type="number"
                  ></input>
                </div>
                <div className="card--details--input--container">
                  <input
                    placeholder="Expiry Number (MM/YY)"
                    className="card--details--input"
                    type="number"
                  ></input>
                </div>
                <div className="card--details--input--container">
                  <input
                    placeholder="CVV"
                    className="card--details--input"
                    type="number"
                  ></input>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="payment--boxes">
            <div className="payment--method--text--button--container">
              <div className="payment--method--text--button">
                <input
                  type="radio"
                  className="payment--radio--buttons"
                  name="card--type"
                  onClick={() => {
                    setCheck(true);
                    setCardDetails(false);
                  }}
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
          </div>
          <div className="payment--boxes">
            <div className="payment--method--text--button--container">
              <div className="payment--method--text--button">
                <input
                  type="radio"
                  className="payment--radio--buttons"
                  name="card--type"
                  onClick={() => {
                    setCheck(true);
                    setCardDetails(false);
                  }}
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
          <input
            type="radio"
            className="payment--radio--buttons"
            onClick={() => {
              setTncCheck(true);
            }}
          ></input>
          <p>I have read and agree to the website terms & conditions*</p>
        </div>
        <button
          className="checkout--button"
          onClick={handleMakePayment}
          disabled={!check || !tncCheck}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
