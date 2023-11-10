console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  event.target.reset();
  event.target.focus(data.firstname);

  const age = Number(data.age);
  const badAss = Number(data.badness);
  console.log(age);
  console.log(badAss);
  const sum = age + badAss;

  console.log(sum);
});
