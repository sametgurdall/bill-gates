import React from "react";

const Receipt = ({ purchasedItems }) => {
  const totalSpent = purchasedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <footer className="bg-light p-3 mt-3 d-flex flex-column align-items-center">
      <h4>Receipt:</h4>
      <div className="justify-content-center">
        <ul className="list-unstyled">
          {purchasedItems.map(
            (item) =>
              item.count > 0 && (
                <li key={item.id}>
                  {item.name} x{item.count}{" "}
                  <span className="text-success">
                    (${(item.price * item.count).toLocaleString()})
                  </span>
                </li>
              )
          )}
        </ul>
      </div>
      <h5>
        Total Spent:{" "}
        <span className="text-success">${totalSpent.toLocaleString()}</span>
      </h5>
    </footer>
  );
};

export default Receipt;