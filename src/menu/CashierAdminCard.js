import React from 'react';

const CashierAdminCard = (props) => {
    
    return (
        <>
          {props.orders.map((order, index) => {
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
                onClick={(order._id) => this.handlePaid(order._id)}
              >
                Paid
              </button>
              <button
                className="cashier--order--button"
                onClick={(order._id) => this.handleFulfilled(order._id)}
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

export default CashierAdminCard;