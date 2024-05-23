import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../App.css";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h2>Tayeba's Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Play">Play</Link>
        <Link to="/about">About</Link>
      </div>
      {user ? <p>Logged in as {user.username}</p> : <p>Please log in</p>}
    </header>
  );
};

export default Header;
