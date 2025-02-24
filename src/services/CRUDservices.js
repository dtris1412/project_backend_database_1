const conection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await conection
    .promise()
    .execute("select* from Users");
  return results;
};
module.exports = { getAllUsers };
