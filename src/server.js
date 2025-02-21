require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const conection = require("./config/database");
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use("/", webRoutes);
conection.query("select * from Users", function (err, result, fields) {
  console.log(">>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
