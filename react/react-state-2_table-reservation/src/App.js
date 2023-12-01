import React from "react";
import { useState } from "react";

import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAddPeople() {
    setPeople(people + 1);
  }

  function handleRemovePeople() {
    setPeople(Math.max(0, people - 1));
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddPeople={handleAddPeople}
        onRemovePeople={handleRemovePeople}
      />
      <p>
        You are going to reserve a table for <strong>{people}</strong> people.
      </p>
    </div>
  );
}
