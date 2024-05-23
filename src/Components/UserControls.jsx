import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";

const UserControls = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-controls">
      {user ? (
        <>
          <LogoutButton />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default UserControls;
