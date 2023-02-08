const router = require("express").Router();
const routes = require("../routes");
//main router all routes
router.use("/api/", routes);
router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
