import React, { useState } from "react";
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
import SpecificItem from "./menu/SpecificItem";
import Modal from "./components/Modal";
import OrderList from "./menu/OrderList";
import MenuStateContainer from "./menu/MenuStateContainer";
import OrderStateContainer from "./menu/OrderStateContainer";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [artGalleryHeader, setArtGalleryHeader] = useState("");
  const [artGalleryPopulate, setArtGalleryPopulate] = useState([]);
  const [specificArtworkDetails, setSpecificArtworkDetails] = useState([]);
  const [cartArtDetails, setCartArtDetails] = useState([]);
  const [shoppingCartNumber, setShoppingCartNumber] = useState("none");
  const [totalAmount, setTotalAmount] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [makePayment, setMakePayment] = useState(false);
  const [confirmationPage, setConfirmationPage] = useState(false);
  const [isMenuPage, setIsMenuPage] = useState(false);
  const [catSelected, setCatSelected] = useState("All Day Breakfast");
  const [dishSelected, setDishSelected] = useState("");
  const [menuPage, setMenuPage] = useState("MenuCategory");
  const [foodOrder, setFoodOrder] = useState([]);

  console.log({ checkOut });
  console.log({ makePayment });
  console.log({ confirmationPage });

  return (
    <div>
      <div className="main--app--container">
        {openModal ? <Modal setOpenModal={setOpenModal} /> : <></>}
        <div className="main--app--inner-container">
          {/* hide the navbar when menu is opened*/}
          <NavBar
            setOpenModal={setOpenModal}
            shoppingCartNumber={shoppingCartNumber}
            cartArtDetails={cartArtDetails}
            setTotalAmount={setTotalAmount}
            setCheckOut={setCheckOut}
            isMenuPage={isMenuPage}
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
                  setCheckOut={setCheckOut}
                  checkOut={checkOut}
                  setMakePayment={setMakePayment}
                  makePayment={makePayment}
                  confirmationPage={confirmationPage}
                  setConfirmationPage={setConfirmationPage}
                />
              }
            />
            <Route
              path="/foodmenu"
              element={
                <MenuStateContainer
                  isMenuPage={isMenuPage}
                  setIsMenuPage={setIsMenuPage}
                  menuPage={menuPage}
                  setMenuPage={setMenuPage}
                  catSelected={catSelected}
                  setCatSelected={setCatSelected}
                  dishSelected={dishSelected}
                  setDishSelected={setDishSelected}
                  setFoodOrder={setFoodOrder}
                />
              }
            />
            <Route
              path="/foodorder"
              element={
                <OrderStateContainer
                  setIsMenuPage={setIsMenuPage}
                  foodOrder={foodOrder}
                  setFoodOrder={setFoodOrder}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
