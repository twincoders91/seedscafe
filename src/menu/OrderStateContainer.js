import React, { useState } from "react";
import OrderList from "./OrderList";
import OrderSubmission from "./OrderSubmission";

const OrderStateContainer = (props) => {
  props.setIsMenuPage(true);
  const [orderPage, setOrderPage] = useState("OrderList");
  const [orderID, setOrderID] = useState();
  const [orderNumber, setOrderNumber] = useState();

  const handleOrderPageChange = (input) => {
    setOrderPage(input);
  };
  let page;

  const handleUpdateFoodOrder = (index, updatedItem) => {
    if (updatedItem.quantity > 0) {
      console.log(updatedItem.quantity);
      props.setFoodOrder((prevOrders) => {
        const arr = [...prevOrders];
        arr[index] = updatedItem;
        return arr;
      });
    } else if (updatedItem.quantity === 0) {
      props.setFoodOrder((prevOrders) => {
        const arr = [...prevOrders];
        const filtered = arr.filter((d, i) => i !== index); //all except the selected index item
        return filtered;
      });
    }
  };

  const postToOrderDB = async (uri, foodOrder) => {
    let newArr = foodOrder.map((d, i) => {
      return {
        name: d.name,
        price: d.price,
        quantity: d.quantity,
        specialRequest: d.specialRequest,
      };
    });

    let orderDBinput = {
      mode: "take away",
      number: 103,
      dishes: newArr,
      paid: false,
      fulfilled: false,
    };

    console.log(orderDBinput);
    const res = await fetch(uri, {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify(orderDBinput),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    // console.log(data[0]._id);
    const orderNumFromId = data[0]._id;
    setOrderID(orderNumFromId);
    setOrderNumber(parseInt(orderNumFromId.slice(-3), 16));
  };

  //   {
  //     "mode": "take away",
  //     "number": 103,
  //     "dishes": [
  //         {"name": "Avocado Toast", "price": 13, "quantity": 1},
  //         {"name": "Bacon-Ham-Egg Sandwich", "price": 13, "quantity": 1}],
  //     "paid": false,
  //     "fulfilled": false
  // }

  if (orderPage === "OrderList") {
    page = (
      <OrderList
        handleOrderPageChange={handleOrderPageChange}
        foodOrder={props.foodOrder}
        setFoodOrder={props.setFoodOrder}
        setMenuPage={props.setMenuPage}
        postToOrderDB={postToOrderDB}
        handleUpdateFoodOrder={handleUpdateFoodOrder}
      />
    );
  } else if (orderPage === "OrderSubmission") {
    page = <OrderSubmission orderID={orderID} orderNumber={orderNumber} />;
  }

  return <div>{page}</div>;
};

export default OrderStateContainer;
