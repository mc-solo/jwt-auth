const express = require("express");
const app = express();

// get port from the env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app is running on port: ", PORT);
});

app.listen();
// middleware definition
const logger = (req, res, next) => {
  console.log(`Request recieved, ${req.method}, ${req.url}`);
  next();
};

// use this very middleware on the application level
app.use(logger);

// define the root route on the app server
app.get("/", (req, res) => {
  res.send("Here is my output for the client.");
});
