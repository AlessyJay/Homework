const express = require("express");
const customerRoute = require("./Route/CustomerRoute");
const branchRoute = require("./Route/BranchRoute");
const app = express();

app.use(express.json());
app.use(express.static("/public"));

// Config routing

// Customer CRUD
app.use("/Customer", customerRoute);
// Branch CRUD
app.use("/Branch", branchRoute);

// Handle path method was not found.
app.use = (req, res, next) => {
  res.status(404).json({ message: "The resource is not found" });
};

// Handle all errors in the application.
app.use = (err, req, res, next) => {
  console.log(err);
  res.status(500).json(err.message);
};

app.listen(8000, () => {
  console.log(`This server is running on port 8000.`);
});
