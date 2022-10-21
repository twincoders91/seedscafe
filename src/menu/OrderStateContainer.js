import React, { useState } from "react";
import OrderList from "./OrderList";
import OrderSubmission from "./OrderSubmission";

const OrderStateContainer = (props) => {
  props.setIsMenuPage(true);
  const [orderPage, setOrderPage] = useState("OrderList");
  const handleOrderPageChange = (input) => {
    setOrderPage(input);
  };
  let page;

  if (orderPage === "OrderList") {
    page = (
      <OrderList
        handleOrderPageChange={handleOrderPageChange}
        foodOrder={props.foodOrder}
      />
    );
  } else if (orderPage === "OrderSubmission") {
    page = <OrderSubmission />;
  }

  return <div>{page}</div>;
};

export default OrderStateContainer;
