const express = require("express");
const {
  registerUser,
  loginUser,
  searchUser,
} = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/search", auth, searchUser);

module.exports = router;
