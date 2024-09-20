import http from "http";
import express from "express";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200; // a status code for okay
//   res.setHeader("Content-Type", "text/plain"); // set response header
//   res.end("Hello, world!"); //send response body and end the response
// });

// the different http methods
const app = express();
const port = 3001;

const application = app.get("/users", (req, res) => {
  // stimulating fetching data
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 47,
    },
    {
      id: 2,
      name: "Helina",
      age: 20,
    },
  ];

  res.json(users);
});

application.listen(port, () => {
  console.log("application is already running ");
});
