import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import Home from "./home/Home";
import Footer from "./Footer";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="main--app--container">
        {!openModal ? (
          <>
            <Home setOpenModal={setOpenModal} />
            <Footer />
          </>
        ) : (
          <ModalNavBar setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}

export default App;
