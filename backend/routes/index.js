const router = require("express").Router();
const userRoutes = require("./user.routes");

//sets up user and thought routes
router.use("/user", userRoutes);

module.exports = router;
