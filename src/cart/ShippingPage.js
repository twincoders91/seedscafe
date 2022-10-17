import React, { useState } from "react";
import topRowArrows from "../assets/cart/toprow/toprowarrows.svg";
import "./shippingStyles.css";

const ShippingPage = ({ cartArtDetails, donation }) => {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [apartmentInput, setApartmentInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  console.log(cartArtDetails);
  console.log(donation);

  return (
    <div className="shipping--main--container">
      <div className="cart--page--top--row--banner">
        <div className="cart--shipping--payment--buttons--box">
          <button className="cart--shipping--payment--buttons">Cart</button>
          <img
            src={topRowArrows}
            className="cart--shipping--payment--arrow"
            alt="images"
          />
          <button className="cart--shipping--payment--buttons--clicked">
            Shipping
          </button>
          <img
            src={topRowArrows}
            className="cart--shipping--payment--arrow"
            alt="images"
          />
          <button className="cart--shipping--payment--buttons">Payment</button>
        </div>
      </div>
      <div>
        <form className="shippingForm">
          <label className="shipping--form--labels">
            {nameInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">Name</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={
                nameInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
          </label>
          <label className="shipping--form--labels">
            {addressInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">Address</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Address"
              className={
                addressInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setAddressInput(e.target.value);
              }}
            />
          </label>
          <label className="shipping--form--labels">
            {apartmentInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">
                Apartment, Suite, Etc (Optional)
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Apartment, Suite, Etc (Optional)"
              className={
                apartmentInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setApartmentInput(e.target.value);
              }}
            />
          </label>
          <label className="shipping--form--labels">
            {postalCodeInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">
                Postal Code
              </p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Postal Code"
              className={
                postalCodeInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setPostalCodeInput(e.target.value);
              }}
            />
          </label>
          <label className="shipping--form--labels">
            {phoneInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">Phone</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Phone"
              className={
                phoneInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setPhoneInput(e.target.value);
              }}
            />
          </label>
          <label className="shipping--form--labels">
            {emailInput == "" ? (
              <></>
            ) : (
              <p className="shipping--form--labels--filled--header">Email</p>
            )}
            <input
              type="text"
              name="name"
              placeholder="Email"
              className={
                emailInput == ""
                  ? "shipping--form--text"
                  : "shipping--form--text--filled"
              }
              onChange={(e) => {
                setEmailInput(e.target.value);
              }}
            />
          </label>
        </form>
      </div>
      <hr className="shipping--page--horizontal--line1"></hr>
      <div className="order--summary--box">
        <p className="order--summary--header">Order Summary</p>
        <div className="order--summary--description--box">
          {cartArtDetails ? (
            cartArtDetails.map((cartItems) => {
              return (
                <div className="order--summary--row">
                  <p className="order--summary--description">
                    {cartItems.artName} X1
                  </p>
                  <p className="order--summary--description">
                    ${cartItems.price.toFixed(2)}
                  </p>
                </div>
              );
            })
          ) : (
            <></>
          )}
          {donation ? (
            <div className="order--summary--row">
              <p className="order--summary--description">Donation</p>
              <p className="order--summary--description">${donation}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr className="shipping--page--horizontal--line2"></hr>
        <div className="shipping--total--cost--row">
          <p className="shipping--total--cost">Total</p>
          <p className="shipping--total--cost">
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
      </div>
    </div>
  );
};

export default ShippingPage;
