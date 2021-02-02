const orderController = require("../controllers/orders");
const express = require("express");

const router = express.Router();

router.get("/", orderController.getAll);

module.exports = router;
