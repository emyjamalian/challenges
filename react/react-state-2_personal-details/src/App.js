import React, { useState } from "react";

import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  function handleCreateUser(event) {
    const formElements = event.target.form.elements;
    const [formValues, setformValues] = useState({ name: "", email: "" });

    setFormValues({
      name: formElements.name.value,
      email: formElements.email.value,
    });
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{formValues.name}</span>
      </p>
      <p>
        Email: <span className="output">{formValues.email}</span>
      </p>
    </div>
  );
}
