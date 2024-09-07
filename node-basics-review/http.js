import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200; // a status code for okay
  res.setHeader("Content-Type", "text/plain"); // set response header
  res.end("Hello, world!"); //send response body and end the response
});
