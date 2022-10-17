import React, { useState } from "react";
import ModalNavBar from "./components/ModalNavBar";
import Home from "./home/Home";
import Footer from "./Footer";
import Art from "./art/Art";
import { Route, Routes } from "react-router-dom";
import ArtGallery from "./art/ArtGallery";
import SpecificArtworkPage from "./art/SpecificArtworkPage";

import OrderSubmission from "./menu/OrderSubmission";
import MenuCategory from "./menu/MenuCategory";
import Menu from "./menu/Menu";
import ArtData from "./art/artData";
import NavBar from "./NavBar";
import CartPage from "./cart/CartPage";
import DineInModal from "./menu/DineInModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [artGalleryHeader, setArtGalleryHeader] = useState("");
  const [artGalleryPopulate, setArtGalleryPopulate] = useState([]);
  const [specificArtworkDetails, setSpecificArtworkDetails] = useState([]);
  const [cartArtDetails, setCartArtDetails] = useState([]);
  const [shoppingCartNumber, setShoppingCartNumber] = useState("none");
  const [totalAmount, setTotalAmount] = useState("");

  console.log(totalAmount);
  console.log(cartArtDetails);

  return (
    <div>
      <div className="main--app--container">
        <div className="main--app--inner-container">
          <NavBar
            setOpenModal={setOpenModal}
            shoppingCartNumber={shoppingCartNumber}
            cartArtDetails={cartArtDetails}
            setTotalAmount={setTotalAmount}
          />

          <Routes>
            <Route path="/" element={<Home setOpenModal={setOpenModal} />} />
            <Route
              path="/art"
              element={
                <Art
                  setArtGalleryHeader={setArtGalleryHeader}
                  setArtGalleryPopulate={setArtGalleryPopulate}
                />
              }
            />{" "}
            <Route
              path="/artgallery"
              element={
                <ArtGallery
                  artGalleryHeader={artGalleryHeader}
                  artGalleryPopulate={artGalleryPopulate}
                  setSpecificArtworkDetails={setSpecificArtworkDetails}
                />
              }
            />
            <Route
              path="/artdetails"
              element={
                <SpecificArtworkPage
                  artGalleryHeader={artGalleryHeader}
                  specificArtworkDetails={specificArtworkDetails}
                  ArtData={ArtData}
                  setSpecificArtworkDetails={setSpecificArtworkDetails}
                  setCartArtDetails={setCartArtDetails}
                  cartArtDetails={cartArtDetails}
                  setShoppingCartNumber={setShoppingCartNumber}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartArtDetails={cartArtDetails}
                  setCartArtDetails={setCartArtDetails}
                  setShoppingCartNumber={setShoppingCartNumber}
                  totalAmount={totalAmount}
                  setTotalAmount={setTotalAmount}
                />
              }
            />
            <Route path="/menucategory" element={<MenuCategory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ordersubmission" element={<OrderSubmission />} />
            <Route path="/modal" element={<DineInModal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
