require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
