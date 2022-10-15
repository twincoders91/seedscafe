import React from "react";
import backarrow from "../../../assets/menu/images/backarrow.svg";
import order from "../../../assets/menu/images/order.svg";

const TableHeader = () => {
  return (
    <div className="table--top--container">
      <div className="menu--back--arrow">
        <img src={backarrow} alt="order"></img>
      </div>
      <div className="table--title">Table No. 8</div>
      <div className="menu--ordericon">
        <img src={order} alt="order"></img>
      </div>
    </div>
  );
};

export default TableHeader;