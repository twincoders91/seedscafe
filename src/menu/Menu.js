import React, { useState } from "react";
// import backarrow from "../assets/menu/images/backarrow.svg";
// import order from "../assets/menu/images/order.svg";
import FullMenu from "./fullMenu";
import Card from "./Card";
import TableHeader from "./menu-component/shared-componenet/TableHeader";
import FilterButtons from "./FilterButtons";
import "./menuStyles.css";

const Menu = (props) => {
  const [dishes, setDishes] = useState(
    FullMenu.filter((newDish) => {
      return newDish.category === props.catSelected;
    })
  );

  //===============creates a new array with the different Menu Categories============

  const menuItems = [...new Set(FullMenu.map((dish) => dish.category))];
  //==========filtering dishes based on Category Clicked, to show on cards===========

  const filterDish = (curentCategory) => {
    const newDish = FullMenu.filter((newDish) => {
      return newDish.category === curentCategory;
    });
    setDishes(newDish);
  };

  //==================================================================================
  return (
    <div className="menu--main--container">

      <TableHeader
        menuPage={props.menuPage}
        handleMenuPageChange={props.handleMenuPageChange}
      />

      <div className="filter--container">
        <FilterButtons
          filterDish={filterDish}
          setDishes={setDishes}
          menuItems={menuItems}
          handleCatSelectedChange={props.handleCatSelectedChange}
          catSelected={props.catSelected}
        />
      </div>
      <div className="menu--items--container">
        <Card
          dishes={dishes}
          handleMenuPageChange={props.handleMenuPageChange}
          handleDishSelectedChange={props.handleDishSelectedChange}
        />
      </div>
    </div>
  );
};

export default Menu;
