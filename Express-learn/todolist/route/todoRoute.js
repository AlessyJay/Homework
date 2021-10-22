const express = require("express");
const router = express.Router();
const todoController = require(`../controllers/todoController`);

// router.get(`/query`, todoController.getName);
// router.get(`/:list/:status`, todoController.getAllTodo);
// router.get("/:id", todoController.getTodo);
// router.put(`/:id`, todoController.checkExistTodoID, todoController.updateTodo);
// router.post(`/create`, todoController.createTodo);
// router.delete(`/:id`, todoController.deleteTodo);

module.exports = router;
