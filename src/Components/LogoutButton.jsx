import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LogoutButton = () => {
  const { logOut } = useContext(UserContext);

  return <button onClick={logOut}>Log Out</button>;
};

export default LogoutButton;
