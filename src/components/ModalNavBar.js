import React from "react";
import { UilTimesCircle } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import { UilRainbow } from "@iconscout/react-unicons";

const ModalNavBar = ({ setOpenModal }) => {
  return (
    <div className="modalNavBar--overview">
      <div className="top--section">
        <UilTimesCircle
          className="close--button"
          onClick={() => {
            setOpenModal(false);
          }}
        />
      </div>
      <div className="middle--section">
        <p>+ Menu</p>
        <p>+ Venue Booking</p>
        <p>+ Support Artwork</p>
        <p>+ Support Micro Business</p>
        <p>+ Rainbow Centre</p>
        <p>+ Donation</p>
        <hr className="horizontal--line" />
      </div>
      <div className="bottom--section">
        <div className="icon--text">
          <UilFacebook />
          Seeds Cafe Facebook
        </div>
        <div className="icon--text">
          <UilInstagramAlt />
          Seeds Cafe Instagram
        </div>
        <div className="icon--text">
          <UilRainbow />
          Rainbow Centre Website
        </div>
      </div>
    </div>
  );
};

export default ModalNavBar;
