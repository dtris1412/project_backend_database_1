const { render, name } = require("ejs");
const conection = require("../config/database");
const { route } = require("../routes/web");
const { getAllUsers } = require("../services/CRUDservices");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
//xu ly data
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  let [results, fields] = await conection
    .promise()
    .execute("select* from Users where id = ?", [userId]);
  let user = results && results.length > 0 ? results[0] : {};
  console.log("check result>>>", results);
  console.log(">>>request.param", req.params, userId);
  res.render("edit.ejs", { userEdit: user });
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  console.log("email = ", email, "name = ", name, "city = ", city);
  // let { email, myName, city } = req.body;
  //   INSERT INTO Users(email, name, city)
  // VALUES('dtris1412@gmail.com', 'le thi v', 'anam dinh')
  // conection.query(
  //   `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
  //   [email, name, city],
  //   function (err, result) {
  //     console.log(result);
  //     res.send("create user successed");
  //   }
  // );
  let [results, fields] = await conection.execute(
    `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    [email, name, city]
  );
  console.log("check result: ", result);
  res.send("create user succeed");
};

module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
