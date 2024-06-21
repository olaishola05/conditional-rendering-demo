import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const storeUser = {
      ...user,
      token: true,
    };
    localStorage.setItem("user", JSON.stringify(storeUser));
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        className="flex flex-col gap-5 w-1/3 border mx-auto p-5"
        onSubmit={submitForm}
      >
        <input
          type="text"
          placeholder="Username"
          className="p-3"
          name="username"
          id="username"
          value={user.username}
          onChange={handleFormChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3"
          name="password"
          id="password"
          value={user.password}
          onChange={handleFormChange}
        />
        <button
          type="submit"
          className="p-2 rounded border bg-black text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
