import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header>
      <h2>Tayeba's Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Play">Play</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
};

export default Header;
