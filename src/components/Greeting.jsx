import React from "react";
import "./greeting.css";

function Greeting() {
  const studentName = "Zion";
  return (
    <div className="greeting">
      <h1>Hello, {studentName}!</h1>
      <p style={styles.greeting}>Welcome to my first React app!</p>
    </div>
  );
}

const styles = {
  greeting: {
    color: "blue",
    backgroundColor: "lightblue",
    padding: "10px",
    borderRadius: "5px",
  },
  header: {
    color: "red",
  },
};

export default Greeting;
