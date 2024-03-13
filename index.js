const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.end("hello world");
});

app.get("/yo", (req, res) => {
  res.end("yo");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
