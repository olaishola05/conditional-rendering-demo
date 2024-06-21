import React from "react";

export default function Button({ children, className, clickHandler }) {
  return (
    <button type="button" className={className} onClick={clickHandler}>
      {children}
    </button>
  );
}
