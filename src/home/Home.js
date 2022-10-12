import React from "react";
import NavBar from "../NavBar";
import menulogo from "../assets/menuimage.png";
import venuelogo from "../assets/venueimage.png";
import artworklogo from "../assets/supportartwork.png";
import microbusinesslogo from "../assets/supportmicrobusiness.png";
import rainbowcentrelogo from "../assets/rainbowcentre.png";
import donationlogo from "../assets/donation.png";
import carouselimage1 from "../assets/homepagecarousellimage1.png";
import bulletclicked from "../assets/bulletclicked.png";
import bulletunclicked from "../assets/bulletunclicked.png";

const Home = ({ setOpenModal }) => {
  return (
    <>
      <NavBar setOpenModal={setOpenModal} />
      <div className="main--home--container">
        <div className="home--card--row--box">
          <div className="home--card--row">
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={menulogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Menu</p>
                </div>
              </div>
            </div>
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={venuelogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Venue Booking</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home--card--row">
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={artworklogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Support Artwork</p>
                </div>
              </div>
            </div>
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={microbusinesslogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Support Micro Business</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home--card--row">
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={rainbowcentrelogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Rainbow Centre</p>
                </div>
              </div>
            </div>
            <div className="individual--card--border">
              <div className="text--logo--box">
                <div className="individual--logo--circle">
                  <img
                    src={donationlogo}
                    className="individual--logo"
                    alt="images"
                  />
                </div>
                <div className="individual--text--box">
                  <p className="individual--text">Donation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home--carousel">
        <img src={carouselimage1} className="carouselimages" alt="images" />
        <div className="carousel--bullets">
          <img src={bulletclicked} className="carousel--bullets" alt="images" />
          <img
            src={bulletunclicked}
            className="carousel--bullets"
            alt="images"
          />
          <img
            src={bulletunclicked}
            className="carousel--bullets"
            alt="images"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
