const router = require("express").Router();
const userRoutes = require("./user.routes");
const leadsquaredRoutes = require("./leadsquared.routes");
router.use("/user", userRoutes);
router.use("/lsq", leadsquaredRoutes);

module.exports = router;
