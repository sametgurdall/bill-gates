import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import Receipt from "./Components/Receipt";
import { items as itemData } from "./data";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  const [balance, setBalance] = useState(100000000000);
  const [items, setItems] = useState(itemData);

  const handleBuy = (item) => {
    if (balance >= item.price) {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        )
      );
      setBalance(balance - item.price);
    }
  };

  const handleSell = (item) => {
    if (item.count > 0) {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count - 1 } : i
        )
      );
      setBalance(balance + item.price);
    }
  };

  const purchasedItems = items.filter((item) => item.count > 0);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Hero />
        <Header balance={balance} />
        <div className="row row-cols-1 row-cols-md-3 g-2 mt-2">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onBuy={handleBuy}
              onSell={handleSell}
              balance={balance}
            />
          ))}
        </div>
        <Receipt purchasedItems={purchasedItems} />
      </div>
    </div>
  );
};

export default App;