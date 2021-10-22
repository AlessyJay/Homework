const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Alessy@123@Raffaello",
  database: "expense",
  connectionLimit: 1,
});

const execute = async (sql, params) => {
  const result = await connection.execute(sql, params);
  return result[0];
};

module.exports = {
  connection,
  execute,
};
