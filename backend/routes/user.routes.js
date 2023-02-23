const express = require("express");
const router = express.Router();
const {
  signupUser,
  loginUser,
  getMyUser,
  updateMyUser,
  deleteMyUser,
} = require("../controllers/user.controller");
const { protect } = require("../utils/auth");

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/me", protect, getMyUser);
router.post("/update", protect, updateMyUser);
router.post("/delete", protect, deleteMyUser);

module.exports = router;
