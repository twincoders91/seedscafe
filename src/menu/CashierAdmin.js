import React, { useEffect, useState } from "react";
import "./menuStyles.css";

const CashierAdmin = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5006/order/");
    const data = await res.json();
    setOrders(data);
    console.log(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handlePaid = async (id) => {
    await fetch(`http://localhost:5006/order/update/ + ${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        paid: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleFulfilled = async (id) => {
    await fetch(`http://localhost:5006/order/update/ + ${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        fulfilled: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const [isPaidDisabled, setIsPaidDisabled] = useState(false);

  const handlePaidClick = () => {
    setIsPaidDisabled(true);
  };

  const [isFulfilledDisabled, setIsFulfilledDisabled] = useState(false);

  const handleFulfilledClick = () => {
    setIsFulfilledDisabled(true);
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
                disabled={isPaidDisabled}
                onClick={() => {
                  handlePaid();
                  handlePaidClick();
                }}
              >
                Paid
              </button>
              <button
                className="cashier--order--button"
                disabled={isFulfilledDisabled}
                onClick={() => {
                  handleFulfilled();
                  handleFulfilledClick();
                }}
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
