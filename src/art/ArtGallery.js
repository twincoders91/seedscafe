import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/art/category/backarrow.svg";
import shoppingCart from "../assets/art/category/shoppingcart.svg";

const ArtGallery = (props) => {
  const { artGalleryHeader, artGalleryPopulate } = props;
  return (
    <div className="art--main--container">
      <div className="art--top--container">
        <div className="art--title">{artGalleryHeader.category}</div>
        <div className="art--back--arrow">
          <Link to="/art">
            <img src={backArrow} alt="images"></img>
          </Link>
        </div>
        <div className="art--shoppingcart">
          <img src={shoppingCart} alt="images"></img>
        </div>
      </div>
      <div className="art--gallery--middle--container">
        {artGalleryPopulate.map((art) => {
          return (
            <div className="individual--art--gallery--card">
              <div className="individual--art--gallery--card--image--box">
                <img
                  src={art.img}
                  className="individual--art--gallery--card--image"
                  alt="images"
                ></img>
              </div>
              <div className="individual--art--gallery--card--textbox">
                <div className="individual--art--gallery--card--title">
                  {art.artName}
                </div>
                <div className="individual--art--gallery--card--artistName">
                  {art.artistName}
                </div>
                <div className="individual--art--gallery--card--price">
                  {art.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtGallery;
