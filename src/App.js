import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import Home from "./home/Home";
import Footer from "./Footer";
import Art from "./art/Art";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="main--app--container">
        {!openModal ? (
          <div className="main--app--inner-container">
            {/* <Home setOpenModal={setOpenModal} /> */}
            <Art />
            <Footer />
          </div>
        ) : (
          <ModalNavBar setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;
