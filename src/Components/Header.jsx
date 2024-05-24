import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import "../App.css";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <header>
      <h2>Tayeba's Blog</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/about">About</Link>
        {user ? (
          <>
            <span>Welcome, {user}!</span>
            <button onClick={logOut}>Log Out</button>
          </>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
