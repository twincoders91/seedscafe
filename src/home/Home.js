import React from "react";
import { Link } from "react-router-dom";
import menulogo from "../assets/cards/menuimage.svg";
import venuelogo from "../assets/cards/venueimage.svg";
import artworklogo from "../assets/cards/supportartwork.svg";
import microbusinesslogo from "../assets/cards/supportmicrobusiness.svg";
import homepageseedscafeimage from "../assets/home/homepageseedscafeimage.svg";
import Slider from "./sliderComponent/Slider";

const Home = ({ setOpenModal }) => {
  return (
    <>
      <div className="home--page--container">
        <div className="home--page--main--image--container">
          <img
            src={homepageseedscafeimage}
            className="home--page--main--image"
            alt="images"
          />
          <div className="home--page--main--image--text--container">
            <p className="home--page--main--image--text">
              Welcome to Seeds Cafe
            </p>
          </div>
        </div>
        <div className="main--home--container">
          <p className="our--services">Our Services</p>
          <div className="home--card--row--box">
            <div className="home--card--row">
              <Link to="/menucategory" className="individual--card--border">
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
              </Link>
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
              <Link to="/art" className="individual--card--border">
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
              </Link>
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
          </div>
        </div>

        <div className="about--us--container">
          <p className="about--us--header">About us</p>
          <p className="about--us--description">
            Seeds Cafe is all about great coffee and good food and experiences.
            We provide F&B training opportunities for young persons with
            disabilities to grow, as well as social space for an inclusive
            community. Our space is thoughtfully curated to allow authentic and
            meaningful interactions for better appreciation of one another as
            unique individuals.
          </p>
          <p className="about--us--header">You may be interested in:</p>
        </div>
        <Slider />
      </div>
    </>
  );
};

export default Home;
