const { render, name } = require("ejs");
const conection = require("../config/database");
const { route } = require("../routes/web");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservices");
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
  let user = await getUserById(userId);
  // console.log("check result>>>", results);
  console.log(">>>request.param", req.params, userId);
  res.render("edit.ejs", { userEdit: user });
};
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  let userId = req.body.userId;
  console.log(
    "email = ",
    email,
    "name = ",
    name,
    "city = ",
    city,
    "userId: ",
    userId
  );
  await updateUserById(email, name, city, userId);

  // res.send("updated");
  res.redirect("/");
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
  let [results, fields] = await conection
    .promise()
    .query(`INSERT INTO Users(email, name, city) VALUES(?,?,?)`, [
      email,
      name,
      city,
    ]);
  console.log("check result: ", results);
  res.send("create user succeed");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  console.log(id);
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
