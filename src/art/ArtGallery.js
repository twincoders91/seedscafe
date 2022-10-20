import React from "react";
import { Link } from "react-router-dom";

const ArtGallery = (props) => {
  const { artGalleryHeader, artGalleryPopulate, setSpecificArtworkDetails } =
    props;

  //======================function to handle Art Card Category clicks=============================

  const handleIndividualArtCard = (artData) => {
    setSpecificArtworkDetails(artData);
  };

  //===============================================================================================

  return (
    <div className="art--main--container">
      <div className="art--top--container">
        <div className="art--title">{artGalleryHeader.category}</div>
        <div className="art--back--arrow">
          {/* <Link to="/art">
            <img src={backArrow} alt="images"></img>
          </Link> */}
        </div>
        {/* <div className="art--shoppingcart">
          <img src={shoppingCart} alt="images"></img>
        </div> */}
      </div>
      <div className="art--gallery--middle--container">
        {artGalleryPopulate.map((art) => {
          return (
            <Link
              to="/artdetails"
              className="individual--art--gallery--card"
              onClick={() => handleIndividualArtCard(art)}
              key={Math.random() * 10000}
            >
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
                  ${art.price.toFixed(2)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtGallery;
