// const { sequelize } = require("./models");

// sequelize.sync();

const express = require("express");
const app = express();
const Route = require("./crud/Route");
const cors = require("cors");

app.use(express.json());

//middleware that allow cross sharing messages.
app.use(cors());

app.use(`/`, Route);

// Middleware
app.use(`/`, async (err, req, res, next) => {
  console.log(`Server's having some problems!`);
  res.status(400).json({ message: err.message });
  console.log(err);
});

app.listen(8000, () => {
  console.log(`Server's running on port 8000`);
});
