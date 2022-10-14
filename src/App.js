import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import NavBar from "./NavBar";
import Home from "./home/Home";
import MenuCategory from "./menu/MenuCategory";
import Menu from "./menu/Menu";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="main--app--container">
        {!openModal ? (
          <div className="main--app--inner-container">
            <NavBar setOpenModal={setOpenModal} />
            <Menu />
          </div>
        ) : (
          <ModalNavBar setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;
