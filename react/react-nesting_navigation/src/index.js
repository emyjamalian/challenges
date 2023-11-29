import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function twoSum(numbers, target) {
  for (const number of numbers) {
    if (target < number) {
      numbers.find((element) => {
        element === target - number;
        return [numbers.indexOf(number), numbers.indexOf(element)];
      });
    }
  }
}

function twoSum(numbers, target) {
  let numObj = {};
  for (let i = 0; i < numbers.length; i++) {
    let need = target - numbers[i];
    if (numObj[need] !== undefined) {
      return [numObj[need], i];
    }
    numObj[numbers[i]] = i;
  }
}

twoSum([1, 2, 3], 4);
