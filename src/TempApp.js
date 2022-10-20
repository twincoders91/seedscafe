//purpose of this tempApp is to test out display of pages
//change <App /> in index.js to <TempApp />

import React from "react";
import Menu from "./menu/Menu";
import MenuCategory from "./menu/MenuCategory";
import OrderList from "./menu/OrderList";
import SpecificItem from "./menu/SpecificItem";

const TempApp = () => {
  return (
    <div>
      <MenuCategory />
      {/* <Menu /> */}
      {/* <SpecificItem /> */}
      {/* <OrderList /> */}
    </div>
  );
};

export default TempApp;
