import React, { useState } from "react";

import MenuCategory from "./MenuCategory";
import Menu from "./Menu";
import SpecificItem from "./SpecificItem";

const MenuStateContainer = (props) => {
  props.setIsMenuPage(true);
  const [catSelected, setCatSelected] = useState("All Day Breakfast");
  const [dishSelected, setDishSelected] = useState("");
  const [menuPage, setMenuPage] = useState("MenuCategory");

  const handleDishSelectedChange = (input) => {
    setDishSelected(input);
  };
  const handleMenuPageChange = (input) => {
    setMenuPage(input);
  };
  const handleCatSelectedChange = (input) => {
    setCatSelected(input);
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
      />
    );
  }

  return (
    <div className="menu--main--container">
      {console.log(catSelected)}
      {console.log(dishSelected)}
      {page}
    </div>
  );
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
