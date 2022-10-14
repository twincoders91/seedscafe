import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import Home from "./home/Home";
import Footer from "./Footer";
import Art from "./art/Art";
import { Route, Routes } from "react-router-dom";
import ArtGallery from "./art/ArtGallery";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="main--app--container">
        <div className="main--app--inner-container">
          <ArtGallery />
          {/* <Routes>
            <Route path="/" element={<Home setOpenModal={setOpenModal} />} />
            <Route path="/art" element={<Art />} />{" "}
          </Routes> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
