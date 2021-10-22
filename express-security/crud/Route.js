const express = require("express");
const controller = require("../controller/controller");
const router = express.Router();

router.post(`/register`, controller.postRegister);
router.post(`/login`, controller.getLogin);

module.exports = router;
