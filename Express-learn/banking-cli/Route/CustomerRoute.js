const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get(`/`, controller.getAllCustomer);
router.get(`/:id`, controller.getCustomerId);
router.post(`/`, controller.postNewCustomer);
router.put(`/:id`, controller.updateCustomer);
router.delete(`/:id`, controller.deleteCustomer);

module.exports = router;
