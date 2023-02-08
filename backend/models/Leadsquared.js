const { Schema, model } = require("mongoose");

const LeadsquaredSchema = new Schema({
  companyName: {
    type: String,
  },
  accessKey: {
    type: String,
  },
  secretKey: {
    type: String,
  },
});

const Leadsquared = model("Leadsquared", LeadsquaredSchema);

module.exports = Leadsquared;
