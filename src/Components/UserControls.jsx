import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import LoginComponent from "./LoginComponent";
import LogoutButton from "./LogoutButton";

const UserControls = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-controls">
      {user ? (
        <>
          <p>Logged in as: {user.email}</p>
          <LogoutButton />
        </>
      ) : (
        <LoginComponent />
      )}
    </div>
  );
};

export default UserControls;
