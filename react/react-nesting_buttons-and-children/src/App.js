import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>{"I"}</Button>
      <Button>{"am"}</Button>
      <Button>{"very"}</Button>
      <Button>{"grumpy"}</Button>
      <Button>{"today!"}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
