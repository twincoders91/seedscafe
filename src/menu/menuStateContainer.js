import React, { useState } from "react";

import MenuCategory from "./MenuCategory";
import Menu from "./Menu";
import SpecificItem from "./SpecificItem";

const MenuStateContainer = ({
  setIsMenuPage,
  menuPage,
  setMenuPage,
  catSelected,
  setCatSelected,
  dishSelected,
  setDishSelected,
  setFoodOrder,
}) => {
  setIsMenuPage(true);

  const handleDishSelectedChange = (input) => {
    setDishSelected(input);
  };
  const handleMenuPageChange = (input) => {
    setMenuPage(input);
  };
  const handleCatSelectedChange = (input) => {
    setCatSelected(input);
  };

  //--- Handle foodOrder---
  const handleAddFoodOrder = (newOrder) => {
    setFoodOrder((prevOrders) => [...prevOrders, newOrder]);
  };

  let page;

  if (menuPage === "MenuCategory") {
    page = (
      <MenuCategory
        handleMenuPageChange={handleMenuPageChange}
        handleCatSelectedChange={handleCatSelectedChange}
      />
    );
  } else if (menuPage === "Menu") {
    page = (
      <Menu
        handleMenuPageChange={handleMenuPageChange}
        menuPage={menuPage}
        handleCatSelectedChange={handleCatSelectedChange}
        catSelected={catSelected}
        handleDishSelectedChange={handleDishSelectedChange}
      />
    );
  } else if (menuPage === "SpecificItem") {
    page = (
      <SpecificItem
        handleMenuPageChange={handleMenuPageChange}
        menuPage={menuPage}
        dishSelected={dishSelected}
        handleAddFoodOrder={handleAddFoodOrder}
      />
    );
  }

  return <div className="menu--main--container">{page}</div>;
};
// return (
//   <div>
//     <Route></Route>
//     <MenuCategory />
//   </div>
//
//   <div>
//
//     <Routes>
//       <Route
//         path="/"
//         element={<MenuCategory setIsMenuPage={props.setIsMenuPage} />}
//       />
//
//     </Routes>
//   </div>
//
//   );
// };

export default MenuStateContainer;
