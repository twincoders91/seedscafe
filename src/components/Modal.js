import React from "react";
import closeButton from "../assets/modal/closebutton.svg";
import iconCircle from "../assets/modal/iconcircle.svg";
import instagram from "../assets/modal/instagram.svg";
import facebook from "../assets/modal/facebook.svg";
import rainbowCentre from "../assets/modal/rainbowcentre.svg";
import { Link } from "react-router-dom";

const ModalNavBar = ({ setOpenModal }) => {
  return (
    <div className="overlay">
      <div className="modalNavBar--overview">
        <div className="top--section">
          <img
            src={closeButton}
            className="close--button"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
        <div className="middle--section">
          <Link
            to="/"
            className="modal--text"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Menu
          </Link>
          <Link
            to="/"
            className="modal--text"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Venue Booking
          </Link>
          <Link
            to="/art"
            className="modal--text"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Support Artwork
          </Link>
          <Link
            to="/"
            className="modal--text"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Support Micro Business
          </Link>
        </div>
        <div className="bottom--section">
          <div className="icon--text">
            <img src={facebook} className="modal--icons" alt="" />
            <img src={iconCircle} className="iconCircle" alt="" />
            <p className="modal--bottom--text">Seeds Cafe Facebook</p>
          </div>
          <div className="icon--text">
            <img src={instagram} className="modal--icons" alt="" />
            <img src={iconCircle} className="iconCircle" alt="" />
            <p className="modal--bottom--text">Seeds Cafe Instagram</p>
          </div>
          <div className="icon--text">
            <img src={rainbowCentre} className="modal--icons" alt="" />
            <img src={iconCircle} className="iconCircle" alt="" />
            <p className="modal--bottom--text">Rainbow Centre Website</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNavBar;
