import React from "react";
import "./styles.css";

export default function App() {
  return <Article></Article>;
}

function Article() {
  return (
    <article>
      <h2 className="article_title">Title</h2>
      <label htmlFor="input" id="name">
        name:
      </label>
      <input type="text" id="name" name="name"></input>
      <br></br> <br></br>
      <input type="checkbox" id="agree" name="agree"></input>
      <label htmlFor="input" id="agree">
        I agree to
      </label>
      <a href="https://create-react-app.dev/">create a react app!</a>
    </article>
  );
}
