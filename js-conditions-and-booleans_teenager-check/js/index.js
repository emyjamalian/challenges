const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  let age = Number(input.value);
  age = parseInt(age, 10);
  //console.log(typeof age);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.

  if (13 < age && age < 17) console.log("You are a teen.");
  else console.log("You are not a teen.");
});
