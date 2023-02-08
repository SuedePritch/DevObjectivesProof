const router = require("express").Router();
const userRoutes = require("./user.routes");
const leadsquaredRoutes = require("./leadsquared.routes");

//sets up user and thought routes
router.use("/user", userRoutes);
router.use("/lsq", userRoutes);

module.exports = router;
