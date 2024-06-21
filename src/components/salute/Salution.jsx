import React from "react";
import styles from "./salute.module.css";

export default function Salutation() {
  const salute = "Hello";
  return (
    <div className={styles.greeting}>
      <h1 className={styles.header}>{salute}!</h1>
      <p>Welcome to my first React app!</p>
    </div>
  );
}
