import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setActive] = useState(false);
  const [message, setMessage] = useState("activate");

  function handleClick() {
    setActive(!isActive);
    setMessage(message === "activate" ? "deactivate" : "activate");
  }
  // Check that the value changes correctly.

  console.log(!isActive);
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{message}</button>
    </main>
  );
}
