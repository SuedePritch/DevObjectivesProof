const { Schema, model } = require("mongoose");

const LeadsquaredSchema = new Schema({
  accesskey: {
    type: String,
  },
  secretkey: {
    type: String,
  },
});

const Leadsquared = model("Leadsquared", LeadsquaredSchema);

module.exports = Leadsquared;
