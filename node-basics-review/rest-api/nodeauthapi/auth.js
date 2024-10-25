const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "welcome to api",
  });
});

app.listen(5000, () => console.log("Server is running on on port 5000"));
