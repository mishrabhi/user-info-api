const express = require("express");
const { registerUser } = require("../controllers/userController");
const { validateUser, validate } = require("../validators/userValidator");

const router = express.Router();

router.post("/register", validateUser, validate, registerUser);

module.exports = router;
