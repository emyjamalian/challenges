console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function removeSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

removeSuccessMessage();

tosCheckbox.addEventListener("input", (click) => {
  if (click.target.checked) hideTosError();
  else {
    submitButton.disabled = true;
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tosCheckbox.checked) {
    showSuccessMessage();
    alert("Form submitted");
  }
  // eslint-disable-next-line no-alert
  return;
});
