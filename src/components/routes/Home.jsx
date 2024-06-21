import React from "react";
import Cards from "../Cards";
import Login from "./Login";

function Home() {
  const token = JSON.parse(localStorage.getItem("user"))?.token || false;
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our site!</p>
      {token ? <Cards /> : <Login />}
    </div>
  );
}

export default Home;
