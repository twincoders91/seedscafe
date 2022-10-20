import React, { useEffect, useState } from "react";
import "./cartStyles.css";
import topRowArrows from "../assets/cart/toprow/toprowarrows.svg";
import ShippingPage from "./ShippingPage";
import PaymentPage from "./PaymentPage";
import ConfirmationPage from "./ConfirmationPage";

const CartPage = ({
  cartArtDetails,
  setCartArtDetails,
  setShoppingCartNumber,
  totalAmount,
  setTotalAmount,
  checkOut,
  setCheckOut,
  setMakePayment,
  makePayment,
  confirmationPage,
  setConfirmationPage,
}) => {
  //=====================================States==========================================
  const [donation, setDonation] = useState(0);
  const [donationButton1Clicked, setDonationButton1Clicked] = useState(false);
  const [donationButton2Clicked, setDonationButton2Clicked] = useState(false);
  const [donationButton3Clicked, setDonationButton3Clicked] = useState(false);
  const [donationButton4Clicked, setDonationButton4Clicked] = useState(false);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  //===USE EFFECT to update the total cart value when donation and total amount changes===
  useEffect(() => {
    const totalCartAmount = Number(totalAmount) + Number(donation);
    setTotalCartValue(totalCartAmount);
  }, [donation, totalAmount]);

  //======================================FUNCTIONS======================================
  //=========================Function to remove item based on ArtName====================
  const handleRemoveFromCart = (artName) => {
    const remainingCartItems = cartArtDetails.filter(
      (d, i) => d.artName !== artName
    );
    setCartArtDetails(remainingCartItems);
    setShoppingCartNumber(remainingCartItems.length);

    const sumArtTotal = remainingCartItems
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);

    setTotalAmount(sumArtTotal.toFixed(2));
  };
  console.log({ totalAmount });
  //=========================Function to add in donation value===========================
  const handleDonation = async (donationNumber) => {
    let donationValue = donationNumber.slice(1);

    if (donationValue == 5.0) {
      setDonationButton1Clicked(true);
      setDonationButton2Clicked(false);
      setDonationButton3Clicked(false);
      setDonationButton4Clicked(false);
      setDonation(donationValue);
    } else if (donationValue == 10.0) {
      setDonationButton2Clicked(true);
      setDonationButton1Clicked(false);
      setDonationButton3Clicked(false);
      setDonationButton4Clicked(false);
      setDonation(donationValue);
    } else if (donationValue == 30.0) {
      setDonationButton3Clicked(true);
      setDonationButton1Clicked(false);
      setDonationButton2Clicked(false);
      setDonationButton4Clicked(false);
      setDonation(donationValue);
    } else if (donationValue == 50.0) {
      setDonationButton4Clicked(true);
      setDonationButton1Clicked(false);
      setDonationButton2Clicked(false);
      setDonationButton3Clicked(false);
      setDonation(donationValue);
    }
  };

  const handleSubmitButton = () => {
    setDonation(inputValue);
  };

  //=========================Proceeding to checkout===========================
  const handleCheckOutClick = () => {
    setCheckOut(false);
    setCartArtDetails(cartArtDetails);
    setDonation(donation);
  };
  //=====================Allowing Press Enter Key for Custom Donation===================================

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmitButton();
      setDonationButton1Clicked(false);
      setDonationButton2Clicked(false);
      setDonationButton3Clicked(false);
      setDonationButton4Clicked(false);
    }
  };

  //=====================Rounding up total cart value to nearest $50==================================

  const handleRoundUp = () => {
    setTotalCartValue(Math.ceil(totalCartValue / 50) * 50);
    setDonationButton1Clicked(false);
    setDonationButton2Clicked(false);
    setDonationButton3Clicked(false);
    setDonationButton4Clicked(false);
  };

  //==================================================================================

  return (
    <>
      <div className="cart--main--container">
        {checkOut ? (
          <>
            <div className="cart--page--top--row--banner">
              <div className="cart--shipping--payment--buttons--box">
                <button className="cart--shipping--payment--buttons--clicked">
                  Cart
                </button>
                <img
                  src={topRowArrows}
                  className="cart--shipping--payment--arrow"
                  alt="images"
                />
                <button
                  className="cart--shipping--payment--buttons"
                  disabled={cartArtDetails.length == 0}
                  onClick={() => {
                    handleCheckOutClick();
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
                <button className="cart--shipping--payment--buttons">
                  Payment
                </button>
              </div>
            </div>
            {cartArtDetails.length ? (
              cartArtDetails.map((cartArtDetails) => {
                return (
                  <div
                    className="cart--page--container--top--section"
                    key={Math.random() * 10000}
                  >
                    <div className="cart--page--container--art--box">
                      <div className="cart--page--art--image--box">
                        <img
                          src={cartArtDetails.img}
                          className="cart--page--art--image"
                          alt=""
                        />
                      </div>
                      <div className="cart--page--art--description--box">
                        <div className="cart--page--art--description--box--left">
                          <div className="cart--page--art--title">
                            {cartArtDetails.artName}
                          </div>
                          <div className="cart--page--art--artistname">
                            {cartArtDetails.artistName}
                          </div>
                          <div className="cart--page--art--delivery--note">
                            Note: Free Delivery
                          </div>
                        </div>
                        <div className="cart--page--art--description--box--right">
                          <p className="cart--page--art--price">
                            {cartArtDetails.price.toFixed(2)}
                          </p>
                          <div className="cart--page--container--edit--box">
                            <button
                              className="delete--button"
                              onClick={() =>
                                handleRemoveFromCart(cartArtDetails.artName)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="empty--cart--text">Your Cart is Empty</p>
            )}
            <hr className="cart--page--horizontal--line"></hr>
            <div className="cart--page--container--middle--section">
              <div className="cart--page--container--middle--top--section">
                <p className="donation--title">
                  Wish to Donate to Rainbow Centre?
                </p>
                <p className="donation--description">
                  The donation goes to support Rainbow Centre’s vocational
                  training and provide as financial aids for students from low
                  income families.
                </p>
              </div>
              <div className="cart--page--container--middle--bottom--section">
                <div className="donation--buttons--top--row--box">
                  <button
                    className={
                      donationButton1Clicked
                        ? "donation--buttons--4--clicked"
                        : "donation--buttons--4"
                    }
                    onClick={(event) => {
                      handleDonation(event.target.innerText);
                    }}
                  >
                    $5.00
                  </button>
                  <button
                    className={
                      donationButton2Clicked
                        ? "donation--buttons--4--clicked"
                        : "donation--buttons--4"
                    }
                    onClick={(event) => {
                      handleDonation(event.target.innerText);
                    }}
                  >
                    $10.00
                  </button>
                  <button
                    className={
                      donationButton3Clicked
                        ? "donation--buttons--4--clicked"
                        : "donation--buttons--4"
                    }
                    onClick={(event) => {
                      handleDonation(event.target.innerText);
                    }}
                  >
                    $30.00
                  </button>
                  <button
                    className={
                      donationButton4Clicked
                        ? "donation--buttons--4--clicked"
                        : "donation--buttons--4"
                    }
                    onClick={(event) => {
                      handleDonation(event.target.innerText);
                    }}
                  >
                    $50.00
                  </button>
                </div>
                <div className="donation--buttons--botton--row--box">
                  <div className="donation--buttons--2--otheramount--box">
                    <div className="donation--otheramount--dollarsign--box">
                      <p className="donation--otheramount--dollarsign">$</p>
                    </div>
                    <input
                      type="number"
                      min="0"
                      placeholder="Other amount"
                      className="donation--input--field"
                      onChange={(e) => {
                        setInputValue(Math.abs(e.target.value));
                      }}
                      onKeyPress={handleKeyPress}
                    ></input>
                  </div>
                  <button
                    className="submit--donation--button"
                    onClick={handleRoundUp}
                  >
                    {`Round up to $${Math.ceil(totalCartValue / 50) * 50}.00`}
                  </button>
                </div>
              </div>
            </div>
            <hr className="cart--page--horizontal--line2"></hr>
            <div className="cart--page--container--bottom--section">
              <div className="total--amount--box">
                <p className="total--amount--price">Total</p>
                <p className="total--amount--price">
                  {totalCartValue && totalAmount
                    ? `$${totalCartValue.toFixed(2)}`
                    : `$0`}
                </p>
              </div>
              <button
                className="checkout--button"
                onClick={() => {
                  handleCheckOutClick();
                  setMakePayment(false);
                }}
                disabled={cartArtDetails.length == 0}
              >
                Checkout
              </button>
            </div>
          </>
        ) : !makePayment ? (
          <ShippingPage
            cartArtDetails={cartArtDetails}
            donation={donation}
            setMakePayment={setMakePayment}
            totalCartValue={totalCartValue}
            setCheckOut={setCheckOut}
          />
        ) : !confirmationPage ? (
          <PaymentPage
            cartArtDetails={cartArtDetails}
            donation={donation}
            setMakePayment={setMakePayment}
            setCheckOut={setCheckOut}
            setConfirmationPage={setConfirmationPage}
          />
        ) : (
          <ConfirmationPage
            setMakePayment={setMakePayment}
            setCheckOut={setCheckOut}
            setConfirmationPage={setConfirmationPage}
            setCartArtDetails={setCartArtDetails}
            setShoppingCartNumber={setShoppingCartNumber}
          />
        )}
      </div>
    </>
  );
};

export default CartPage;
