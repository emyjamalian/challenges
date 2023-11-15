console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
function showWelcomeMessage() {
  console.log("Desired text");
}

handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("desord text 😅");
});
