import React from "react";
import "./cartStyles.css";
import topRowArrows from "../assets/cart/toprow/toprowarrows.svg";

const CartPage = ({
  cartArtDetails,
  setCartArtDetails,
  setShoppingCartNumber,
  totalAmount,
  setTotalAmount,
}) => {
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

  //==================================================================================

  console.log(cartArtDetails);

  return (
    <>
      <div className="cart--main--container">
        <div className="cart--page--top--row--banner">
          <div className="cart--shipping--payment--buttons--box">
            <button className="cart--shipping--payment--buttons">Cart</button>
            <img
              src={topRowArrows}
              className="cart--shipping--payment--arrow"
              alt="images"
            />
            <button className="cart--shipping--payment--buttons">
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
            <p className="donation--title">Wish to Donate to Rainbow Centre?</p>
            <p className="donation--description">
              The donation goes to support Rainbow Centre’s vocational training
              and provide as financial aids for students from low income
              families.
            </p>
          </div>
          <div className="cart--page--container--middle--bottom--section">
            <div className="donation--buttons--top--row--box">
              <button className="donation--buttons--4">$5.00</button>
              <button className="donation--buttons--4">$10.00</button>
              <button className="donation--buttons--4">$30.00</button>
              <button className="donation--buttons--4">$50.00</button>
            </div>
            <div className="donation--buttons--botton--row--box">
              <div className="donation--buttons--2--otheramount--box">
                <div className="donation--otheramount--dollarsign--box">
                  <p className="donation--otheramount--dollarsign">$</p>
                </div>
                <input
                  type="text"
                  placeholder="Other amount"
                  className="donation--input--field"
                ></input>
              </div>
              <button className="donation--roundup--button">{`Round up to $${cartArtDetails.price}`}</button>
            </div>
          </div>
        </div>
        <hr className="cart--page--horizontal--line2"></hr>
        <div className="cart--page--container--bottom--section">
          <div className="total--amount--box">
            <p className="total--amount--price">Total</p>
            <p className="total--amount--price">
              {totalAmount ? `$${totalAmount}` : `$0`}
            </p>
          </div>
          <button className="checkout--button">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
