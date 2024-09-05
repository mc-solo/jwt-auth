// Callbacks are funcitons that are passed as an argument into another funciotion
// And they are exected after the completion of that function's operation

function delayedGreeting(callback) {
  setTimeout(() => {
    console.log("Pop up after just 3 seconds.");
  }, 3000);
  if (callback) callback(); // execute the callback after 3 seconds.
}

function sayGoodbye() {
  console.log("Finally, it's time to say goodbye!");
}

delayedGreeting(sayGoodbye);
