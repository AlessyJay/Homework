const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get(`/`, controller.getAllBranch);
router.get(`/:id`, controller.getBranchId);
router.post(`/`, controller.postBranch);
router.put(`/:id`, controller.updateBranch);
router.delete(`/:id`, controller.deleteBranch);

module.exports = router;
