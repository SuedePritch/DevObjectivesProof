const express = require("express");
const router = express.Router();
const { createLeadsquared } = require("../controllers/leadsquared.controller");

router.post("/lsq", createLeadsquared);

module.exports = router;
