import React from "react";
import backarrow from "../assets/menu/images/backarrow.svg";
import "./menuStyles.css";
import MenuCategoryCard from "./MenuCategoryCard";
import FullMenu from "./fullMenu";

const MenuCategory = () => {
  const menuCategoryData = FullMenu.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);
  return (
    <div className="menu--main--container">
      <div className="menu--top--container">
        <div className="menu--back--arrow">
          <img src={backarrow} alt="back"></img>
        </div>
        <div className="menu--title">Menu Category</div>
      </div>
      <div className="menu--middle--container">
        {menuCategoryData.map((data) => {
          return <MenuCategoryCard category={data.category} image={data.img} />;
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
