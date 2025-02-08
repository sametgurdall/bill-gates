import React from "react";

const Header = ({ balance }) => (
  <header className="money text-white text-center p-3 sticky-top">
    <h1>${balance.toLocaleString()}</h1>
  </header>
);

export default Header;