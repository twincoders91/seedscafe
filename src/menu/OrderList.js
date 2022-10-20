import React from "react";
import OrderCard from "./menu-component/orderList-component/OrderCard";
import TableHeader from "./menu-component/shared-componenet/TableHeader";

const OrderList = (props) => {
  props.setIsMenuPage(true);
  const orderList = [
    {
      name: "Avocado Toast",
      price: 13.9,
      img: "https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_960_720.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "All Day Breakfast",
      tags: ["Chef's Recommendation", "Healthier Choice"],
    },
    {
      name: "Bacon-Ham-Egg Sandwich",
      price: 13.9,
      img: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFjb24lMjBoYW0lMjBlZ2clMjBzYW5kd2ljaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "All Day Breakfast",
      tags: [],
    },

    {
      name: "Bolognese Pasta",
      price: 14.9,
      img: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1008&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "Main",
      tags: [],
    },
  ];

  return (
    <div className="specific--main--container">
      <TableHeader />
      <div className="order--list--main--container">
        <div className="order--text--format">
          <label>Your Order List</label>
          <button>Edit</button>
        </div>
        <div div className="order--card--container">
          {orderList.map((data, index) => {
            return <OrderCard data={data} index={index} />;
          })}
        </div>
        <div className="order--text--format order--total">
          <label>Total</label>
          <label>$123123</label>
        </div>
        <div className="order--button--container">
          <button className="order--submitOrder">Submit Order List</button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
