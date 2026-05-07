const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("GitHub Actions CI Working");
});

console.log("Express app loaded successfully");
