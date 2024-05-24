import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? loggedInUser : null;
  });

  const logIn = (username) => {
    setUser(username);
    localStorage.setItem("loggedInUser", username);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
