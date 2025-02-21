const conection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  conection.query("select * from Users", function (err, result, fields) {
    users = result;
    console.log("check result>>>", result);
    console.log("check user>>>: ", users);
    res.send(JSON.stringify(users));
  });
  //xu ly data
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
};
