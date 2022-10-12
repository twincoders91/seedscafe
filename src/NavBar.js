import React from "react";
import { UilBars } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";

const NavBar = ({ setOpenModal }) => {
  return (
    <div className="Navbar">
      <div className="nav--background">
        <span className="nav--logo">Welcome to Seeds Cafe</span>
        <UilBars
          className="nav--hamburger"
          onClick={() => {
            setOpenModal(true);
          }}
        />
        <UilUser className="nav--user--icon" />
      </div>
    </div>
  );
};

export default NavBar;
