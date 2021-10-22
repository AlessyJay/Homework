// const express = require("express");
// const { readFile, writeFile } = require("fs/promises");
// const app = express();
// const todoRouter = require(`./route/todoRoute`);

// app.use(express.json());

// app.use(`/todos`, todoRouter);

// app.use((err, req, res, next) => {
//   res.status(400).send({ message: err });
//   next(err);
// });

// app.listen(8000, () => {
//   console.log(`This server is running on port 8000`);
// });

const { Router } = require("express");
const express = require("express");
const route = require("./route/Route");
const app = express();
// const mysql = require("mysql2/promise");
// const pool = require("./db/connection");

// const promise = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Alessy@123@Raffaello",
//   database: "my_todo",
// });

// promise
//   .then((connection) => {
//     console.log("Connect to DB successfully");
//     const resultPromise = connection.query(
//       `INSERT into list (title, due_date) VALUES ('Invest with James', '2021-09-18')`
//     );
//     // const resultPromise = connection.query("select * from list");
//     return resultPromise;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Alessy@123@Raffaello",
//   database: "my_todo",
//   connectionLimit: 100,
// });

// pool.query("select * from list").then(([row]) => {
//   console.log(row);
// });

// pool
//   .execute("insert into list (title, completed, due_date) values (?, ?, ?)", [
//     "Keeper",
//     1,
//     new Date(`2021-09-22`),
//   ])
//   .then((result) => {
//     console.log(result[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// pool.execute("select * from list where id = ?", [3]).then((result) => {
//   console.log(result);
// });

// app.use(`/todos`, route);

app.use("/", route);

app.listen(8000, () => console.log("Server lunch successfully"));
