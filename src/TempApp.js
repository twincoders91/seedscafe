//purpose of this tempApp is to test out display of pages
//change <App /> in index.js to <TempApp />

import React from "react";
import Menu from "./menu/Menu";
import SpecificItem from "./menu/SpecificItem";

const TempApp = () => {
  return (
    <div>
      {/* <Menu /> */}
      <SpecificItem />
    </div>
  );
};

export default TempApp;
