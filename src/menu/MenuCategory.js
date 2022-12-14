import React, { useState } from "react";
import { Link } from "react-router-dom";
import backarrow from "../assets/menu/images/backarrow.svg";
import "./menuStyles.css";
import MenuCategoryCard from "./MenuCategoryCard";
// import FullMenu from "./fullMenu";
import Menu from "./Menu";
import SpecificItem from "./SpecificItem";

const MenuCategory = (props) => {
  const menuCategoryData = props.FullMenu.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);

  return (
    <>
      <div className="menu--top--container">
        <div
          className="menu--back--arrow"
          onClick={() => {
            props.setIsMenuPage(false);
          }}
        >
          <Link to="/">
            <img src={backarrow} alt="back"></img>
          </Link>
        </div>

        <div className="menu--title">Menu Category</div>
      </div>
      <div className="menu--middle--container">
        {menuCategoryData.map((data) => {
          return (
            <MenuCategoryCard
              category={data.category}
              image={data.img}
              handleMenuPageChange={props.handleMenuPageChange}
              handleCatSelectedChange={props.handleCatSelectedChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default MenuCategory;
