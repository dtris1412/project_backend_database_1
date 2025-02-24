const conection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await conection
    .promise()
    .execute("select* from Users");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await conection
    .promise()
    .execute("select* from Users where id = ?", [userId]);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await conection
    .promise()
    .query(`UPDATE Users SET email = ?, name = ?, city = ?  WHERE id = ?`, [
      email,
      name,
      city,
      userId,
    ]);
};
const deleteUserById = async (id) => {
  let [results, fields] = await conection
    .promise()
    .query(`DELETE FROM Users WHERE id = ?`, [id]);
  console.log(">>check result", results);
};
module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };
