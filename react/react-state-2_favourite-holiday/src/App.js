import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [formValues, setFormValues] = useState({
    holiday: "",
    date: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    let holidayValue = event.target.elements.holiday.value;
    const dateValue = event.target.elements.date.value;
    setFormValues({
      holiday: holidayValue,
      date: dateValue,
    });

    //reset form
    event.target.reset();
    event.target.elements.holiday.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button
          type="submit"
          className="form__submit-button"
          onClick={() => setFormValues({ holiday: "", date: "" })}
        >
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{formValues.holiday}</span>
      </p>
      <p>
        Date: <span className="output">{formValues.date}</span>
      </p>
    </div>
  );
}
