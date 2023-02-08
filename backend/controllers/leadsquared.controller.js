const asyncHandler = require("express-async-handler");
const Leadsquared = require("../models/Leadsquared");

const createLeadsquared = asyncHandler(async (req, res) => {
  const { companyName, accesskey, secretkey } = req.body;
  const leadsquared = await Leadsquared.create({
    companyName: companyName,
    accessKey: accessKey,
    secretKey: secretKey,
  });
  res.status(201).json(leadsquared);
});

module.exports = {
  createLeadsquared,
};
