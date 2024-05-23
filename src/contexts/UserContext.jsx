import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const logIn = (username) => {
    setUser(username);
    localStorage.setItem("username", username);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  //   const isLoggedIn = () => {
  //     return !!user;
  //   };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
