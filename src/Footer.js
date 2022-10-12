import React from "react";
import facebooklogo from "./assets/footerfacebooklogo.png";
import ellipse from "./assets/ellipse.png";
import instagramlogo from "./assets/footerinstagram.png";
import rainbowcentre from "./assets/footerrainbowcentre.png";

const Footer = () => {
  return (
    <div className="footer--container">
      <div className="footer--top--section">
        <div className="footer--left--top--section">Seeds Cafe</div>
        <div className="footer--right--top--section">
          <div className="footer--logo--text--box">
            <img src={facebooklogo} className="footer--logo" alt="images"></img>
            <img src={ellipse} className="footer--ellipse" alt="images"></img>
            <div className="footer--logo--text">Seeds Cafe Facebook</div>
          </div>
          <div className="footer--logo--text--box">
            <img
              src={instagramlogo}
              className="footer--logo"
              alt="images"
            ></img>
            <img src={ellipse} className="footer--ellipse" alt="images"></img>
            <div className="footer--logo--text">Seeds Cafe Instagram</div>
          </div>
          <div className="footer--logo--text--box">
            <img
              src={rainbowcentre}
              className="footer--logo"
              alt="images"
            ></img>
            <img src={ellipse} className="footer--ellipse" alt="images"></img>
            <div className="footer--logo--text">Rainbow Centre Website</div>
          </div>
        </div>
      </div>
      <div className="footer--middle--section">
        <p className="footer--middle--section--text">Menu</p>
        <p className="footer--middle--section--text">Venue Booking</p>
        <p className="footer--middle--section--text">Art Gallery</p>
        <p className="footer--middle--section--text">Micro Business</p>
      </div>
      <div className="footer--bottom--section">
        <hr className="footer--horizontal--line" />
        <p className="footer--bottom--section--text">
          Seeds Cafe 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
