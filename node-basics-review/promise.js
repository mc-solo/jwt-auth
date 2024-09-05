import fetch from "node-fetch";
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

// fetchData()
//   .then((response) => {
//     // handle success
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error("error fetching data from server");
//   });

// Async/Await
// Help me write an asynchronous code in a more synchronous manner
// An async function always returns a promise

// Declaring an async function

async function fetchData() {
  // my code here
}

// using await inside of an async function

async function pullData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let data = await res.json();

  console.log(data);
}
pullData();
