import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("All fields are required");
      return;
    }

    const existingUser = localStorage.getItem(username);

    if (existingUser) {
      setError("User already exists");
      return;
    }

    const user = {
      username,
      password,
    };

    localStorage.setItem(username, JSON.stringify(user));
    setSuccess(true);
    setError(null);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Registration successful!</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
