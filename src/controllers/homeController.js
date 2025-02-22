const { render, name } = require("ejs");
const conection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};
//xu ly data
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  console.log("email = ", email, "name = ", name, "city = ", city);
  // let { email, myName, city } = req.body;
  //   INSERT INTO Users(email, name, city)
  // VALUES('dtris1412@gmail.com', 'le thi v', 'anam dinh')
  conection.query(
    `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    [email, name, city],
    function (err, result) {
      console.log(result);
      res.send("create user successed");
    }
  );
};

module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
};
