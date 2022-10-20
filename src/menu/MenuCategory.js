import React, { useState } from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import "./menuStyles.css";
import MenuCategoryCard from "./MenuCategoryCard";
import FullMenu from "./fullMenu";
import Menu from "./Menu";
import SpecificItem from "./SpecificItem";

const MenuCategory = () => {
  const [menuPage, setMenuPage] = useState("MenuCategory");
  const [catSelected, setCatSelected] = useState("All Day Breakfast");

  const [dishSelected, setDishSelected] = useState("");
  const handleDishSelectedChange = (input) => {
    setDishSelected(input);
  };
  const handleMenuPageChange = (input) => {
    setMenuPage(input);
  };

  const handleCatSelectedChange = (input) => {
    setCatSelected(input);
  };

  const menuCategoryData = FullMenu.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);

  let page;
  if (menuPage === "MenuCategory") {
    page = (
      <>
        <div className="menu--top--container">
          <div className="menu--back--arrow">
            <img src={backarrow} alt="back"></img>
          </div>
          <div className="menu--title">Menu Category</div>
        </div>
        <div className="menu--middle--container">
          {menuCategoryData.map((data) => {
            return (
              <MenuCategoryCard
                category={data.category}
                image={data.img}
                handleMenuPageChange={handleMenuPageChange}
                handleCatSelectedChange={handleCatSelectedChange}
              />
            );
          })}
        </div>
      </>
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

export default MenuCategory;
