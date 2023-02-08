const Leadsquared = require("../models/Leadsquared");
const asyncHandler = require("express-async-handler");

const createLeadsquared = asyncHandler(async (req, res) => {
  const { accesskey, secretkey } = req.body;
  console.log(accesskey, secretkey);
  const user = await Leadsquared.create({
    accesskey: accesskey,
    secretkey: secretkey,
  });
  res.json({
    accesskey,
    secretkey,
  });
});

module.exports = {
  createLeadsquared,
};
