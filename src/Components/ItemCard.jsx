import React from "react";

const ItemCard = ({ item, onBuy, onSell, balance }) => (
  <div className="col">
    <div className="card">
      <img
        src={item.image}
        className="card-img-top card-img-custom img-fluid"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Price: ${item.price.toLocaleString()}</p>
      </div>
      <div className="card-footer d-flex justify-content-evenly align-items-center">
        <button
          className="btn btn-danger fw-bold btn-sell px-4"
          onClick={() => onSell(item)}
          disabled={item.count === 0}
        >
          Sell
        </button>
        <p className="mb-0">Bought: {item.count}</p>
        <button
          className="btn btn-success fw-bold btn-buy px-4"
          onClick={() => onBuy(item)}
          disabled={balance < item.price}
        >
          Buy
        </button>
      </div>
    </div>
  </div>
);

export default ItemCard;