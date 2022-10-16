import React from "react";
import { Link } from "react-router-dom";
import { UilBars } from "@iconscout/react-unicons";
import headerseedslogo from "./assets/header/headerseedslogo.svg";
import shoppingCartCirle from "./assets/header/shoppingcartcircle.svg";
import shoppingCart from "./assets/art/category/shoppingcart.svg";

const NavBar = ({
  setOpenModal,
  shoppingCartNumber,
  cartArtDetails,
  setTotalAmount,
}) => {
  const handleGoToCart = () => {
    const sumArtTotal = cartArtDetails
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    setTotalAmount(sumArtTotal.toFixed(2));
  };

  console.log(shoppingCartNumber);
  return (
    <div className="Navbar">
      <div className="nav--background">
        <img src={headerseedslogo} className="nav--logo" alt="images"></img>
        <UilBars
          className="nav--hamburger"
          onClick={() => {
            setOpenModal(true);
          }}
        />
        <Link to="/cart">
          <img
            src={shoppingCart}
            className="nav--shopping--cart--icon"
            alt="images"
            onClick={handleGoToCart}
          />
        </Link>
        {shoppingCartNumber !== "none" && shoppingCartNumber !== 0 ? (
          <>
            <img
              src={shoppingCartCirle}
              className="nav--shopping--cart--circle"
              alt="images"
            />
            <p className="nav--shopping--cart--number">{shoppingCartNumber}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBar;
