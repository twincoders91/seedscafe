import React from "react";
import { UilUtensils } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { UilPalette } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { UilRainbow } from "@iconscout/react-unicons";
import { UilUnamused } from "@iconscout/react-unicons";

const Home = () => {
  return (
    <div className="main--home--container">
      <div className="home--grid--box">
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilUtensils className="individual--logo" />
              </div>
              <p className="individual--text">Menu</p>
            </div>
          </div>
        </div>
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilApps className="individual--logo" />
              </div>
              <p className="individual--text">Venue Booking</p>
            </div>
          </div>
        </div>
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilPalette className="individual--logo" />
              </div>
              <p className="individual--text">Support Artwork</p>
            </div>
          </div>
        </div>
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilShoppingCartAlt className="individual--logo" />
              </div>
              <p className="individual--text">Support Micro Business</p>
            </div>
          </div>
        </div>
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilRainbow className="individual--logo" />
              </div>
              <p className="individual--text">Rainbow Centre</p>
            </div>
          </div>
        </div>
        <div className="individual--grid--box">
          <div className="individual--box--border">
            <div className="text--logo--box">
              <div className="individual--logo--circle">
                <UilUnamused className="individual--logo" />
              </div>
              <p className="individual--text">Donation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
