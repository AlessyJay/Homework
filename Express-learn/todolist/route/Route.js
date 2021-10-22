const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// router.get(`/`, controller.getLists);
// router.post(`/:title/:completed/:due_date`, controller.postLists);
// router.delete(`/:id`, controller.deleteList);
// router.put(`/:id/:title/:completed/:due_date`, controller.updateList);

router.get(`/`, controller.getTransactions);
router.post(
  `/:payee/:amount/:date/:comment/:categoryID`,
  controller.postTransactions
);

module.exports = router;
