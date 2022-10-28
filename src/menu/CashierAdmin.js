import React, { useEffect, useState } from "react";
import "./menuStyles.css";

const CashierAdmin = () => {
  // fetch all orders
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5006/order/");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // change status to paid
  const handlePaid = async () => {
    await fetch("http://localhost:5006/order/update/" + orders[0]._id, {
      method: "PATCH",
      body: JSON.stringify({
        paid: true,
        fulfilled: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  // change status to fulfilled
  const handleFulfilled = async () => {
    await fetch("http://localhost:5006/order/delete/" + orders[0]._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <>
      {orders.map((order, index) => {
        if (order.fulfilled === false) {
          return (
            <div className="cashier--order--container" key={index}>
              <h3>
                {order.mode}{" "}
                {order.number != "Takeaway"
                  ? `Table Number:
                        ${order.number}`
                  : ""}
                {order.id}
              </h3>
              <div>
                {order.dishes.map((dish, index) => {
                  return (
                    <div className="cashier--dishes--container" key={index}>
                      <h5>
                        {dish.name} x {dish.quantity}{" "}
                        {dish.specialRequest != ""
                          ? `Special Request:
                        ${dish.specialRequest}`
                          : ""}
                      </h5>
                    </div>
                  );
                })}
              </div>
              <button
                className="cashier--order--button"
                onClick={() => handlePaid(orders[0].id)}
              >
                Paid
              </button>
              <button
                className="cashier--order--button"
                onClick={() => handleFulfilled(orders[0].id)}
              >
                Fulfilled
              </button>
            </div>
          );
        }
      })}
    </>
  );
};

export default CashierAdmin;
