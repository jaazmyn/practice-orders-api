const usersController = require("../controllers/users");
const express = require("express");

const router = express.Router();

router.get("/:id", usersController.getById);
router.get("/", usersController.getAll);
router.post("/", usersController.createUser);

module.exports = router;
