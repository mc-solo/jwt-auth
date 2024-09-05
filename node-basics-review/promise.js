// It's an object representing an eventual completion of an async operation.
// It's like a placeholder for a future variable.
// It's constructed using the promise constructor which takes the executor function as an arg
// And that function takes resolve and reject as a parameter

// A basic promise construction
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// Adding an error handling part to a promise
// Using .then().catch() for promises

fetchData()
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error) => {
    console.error("error fetching data from server");
  });
