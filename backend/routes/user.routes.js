const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getMyUser,
} = require("../controllers/user.controller");
const { protect } = require("../utils/auth");

router.post("/", signupUser);
router.post("/login", loginUser);
router.get("/me", protect, getMyUser);

module.exports = router;
