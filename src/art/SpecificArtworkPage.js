import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../assets/art/category/backarrow.svg";
import shoppingCart from "../assets/art/category/shoppingcart.svg";
import deliveryIcon from "../assets/art/specificartwork/deliveryicon.svg";

const SpecificArtworkPage = ({ artGalleryHeader, specificArtworkDetails }) => {
  console.log(specificArtworkDetails.artName);
  return (
    <div className="art--main--container">
      <div className="art--top--container">
        <div className="art--title">{artGalleryHeader.category}</div>
        <div className="art--back--arrow">
          <Link to="/artgallery">
            <img src={backArrow} alt="images"></img>
          </Link>
        </div>
        <div className="art--shoppingcart">
          <img src={shoppingCart} alt="images"></img>
        </div>
      </div>
      <div className="specific--art--gallery--middle--container">
        <div className="specific--art--gallery--image--container">
          <img
            src={specificArtworkDetails.img}
            className="specific--art--gallery--image"
          />
        </div>
        <div className="art--gallery--description--container">
          <p className="art--gallery--description--artistname">
            {specificArtworkDetails.artistName}
          </p>
          <p className="art--gallery--description--artname">
            {specificArtworkDetails.artName}
          </p>
          <div className="art-gallery--description--bulletlists">
            <ul>
              <li className="art-gallery--description--bulletlists--text">
                {specificArtworkDetails.physicalSize}
              </li>
              <li className="art-gallery--description--bulletlists--text">
                {specificArtworkDetails.physicalMaterial}
              </li>
            </ul>
          </div>
          <div className="art-gallery--description--artistdescription">
            <p>{specificArtworkDetails.description}</p>
          </div>
        </div>
        <div className="art--gallery--addtocart--container">
          <div className="art--gallery--addtocart--container--topsection">
            <img src={deliveryIcon} className="delivery--icon" />
            <p className="delivery--details">Free local delivery or pick up</p>
          </div>
          <div className="art--gallery--addtocart--container--bottomsection">
            <button className="art--add--to--cart--button">
              <p className="art--add--to--cart--text">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificArtworkPage;
