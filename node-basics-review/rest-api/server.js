const express = require("express");

const app = express();

// define a port from the env variable
const PORT = process.env.PORT || 3000;

// define a basic route
const server = app.get("/", (req, res) => {
  res.send("Response sent!");
});

// starting the server
server.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
