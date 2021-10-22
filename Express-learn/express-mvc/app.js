const express = require("express");
const app = express();
const todoController = require(`./controllers/todoController`);

app.get(`/`, todoController.getIndex);

app.use(express.urlencoded({ extended: false }));

app.set(`view engine`, `ejs`);

app.listen(8000, () => {
  console.log(`This server is running on port 8000`);
});
