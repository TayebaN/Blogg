import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { signOutUser } from "../Firebase/authFunctions";

const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <h2>Tayeba's Blog</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/about">About</Link>
        {userLoggedIn ? (
          <>
            <span>Welcome, {currentUser.email}!</span>

            <button onClick={signOutUser}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
