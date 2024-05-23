import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [useremail, setEmailUser] = useState("");
  const { logIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter name"
        required
      />
      <input
        type="email"
        value={useremail}
        onChange={(e) => setEmailUser(e.target.value)}
        placeholder="Enter Email"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
