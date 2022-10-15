import React from "react";
import { UilBars } from "@iconscout/react-unicons";
import headerseedslogo from "./assets/header/headerseedslogo.svg";
import profilelogoheader from "./assets/header/profilelogoheader.svg";

const NavBar = ({ setOpenModal }) => {
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
        <img src={profilelogoheader} className="nav--user--icon" alt="images" />
      </div>
    </div>
  );
};

export default NavBar;
