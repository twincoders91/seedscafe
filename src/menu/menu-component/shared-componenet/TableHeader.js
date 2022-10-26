import React from "react";
import backarrow from "../../../assets/menu/images/backarrow.svg";
import order from "../../../assets/menu/images/order.svg";
import { Link } from "react-router-dom";

const TableHeader = (props) => {
  const handleBackClick = () => {
    if (props.menuPage === "Menu") {
      props.handleMenuPageChange("MenuCategory");
    } else if (props.menuPage === "SpecificItem") {
      props.handleMenuPageChange("Menu");
    }
  };

  const tableNumber = () => {
    if (props.tableNumber == "Takeaway") {
      return "Takeaway";
    } else {
      return `Table No. ${props.tableNumber}`;
    }
  };

  return (
    <div className="table--top--container">
      <div className="menu--back--arrow" onClick={handleBackClick}>
        <img src={backarrow} alt="order"></img>
      </div>
      <div className="table--title">{tableNumber()}</div>
      <div className="menu--ordericon">
        <Link to="/foodorder">
          <img src={order} alt="order"></img>
        </Link>
      </div>
    </div>
  );
};

export default TableHeader;
