import React, { useState } from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import order from "../assets/menu/images/order.svg";
import FullMenu from "./fullMenu";
import Card from "./Card";
import FilterButtons from "./FilterButtons";
import "./menuStyles.css";

const Menu = () => {
  const [dishes, setDishes] = useState(FullMenu);

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
      <div className="table--top--container">
        <div className="menu--back--arrow">
          <img src={backarrow} alt="order"></img>
        </div>
        <div className="table--title">Table No. 8</div>
        <div className="menu--ordericon">
          <img src={order} alt="order"></img>
        </div>
      </div>
      <div className="filter--container">
        <FilterButtons
          filterDish={filterDish}
          setDishes={setDishes}
          menuItems={menuItems}
        />
      </div>
      <div className="menu--items--container">
        <Card dishes={dishes} />
      </div>
    </div>
  );
};

export default Menu;
