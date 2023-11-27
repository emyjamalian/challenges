import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley ishappy={true} />;
}

function Smiley({ isHappy = true }) {
  return <h1>{isHappy ? "😃" : "😢"}</h1>;
}
