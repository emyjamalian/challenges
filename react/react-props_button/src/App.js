import React from "react";
import "./styles.css";

export default function App() {
  const onClick = function handleClick() {
    console.log("WE WANT YOU!");
  };
  return (
    <Button
      color="#ffa500"
      disabled={false}
      text="My button"
      onClick={onClick}
    ></Button>
  );
}

function Button({ color, disabled, text, onClick }) {
  const myStyle = {
    padding: "10px",
    fontfamily: "tahoma",
    color: color,
    backgrounColor: "green",
  };

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        value={text}
        style={myStyle}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
