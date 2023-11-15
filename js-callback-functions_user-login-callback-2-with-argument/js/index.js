console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}
//   Call "handleUserLogin" and pass your callback function as the first argument.

handleUserLogin(showWelcomeMessage);

//anonymous function inside function call
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});

//I don't know what;s this but
handleUserLogin((userName) => {
  showWelcomeMessage(userName);
});
