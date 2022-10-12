import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import NavBar from "./NavBar";
import Home from "./home/Home";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="main--app--container">
        {!openModal ? (
          <>
            <NavBar setOpenModal={setOpenModal} />
            <Home />
          </>
        ) : (
          <ModalNavBar setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;
