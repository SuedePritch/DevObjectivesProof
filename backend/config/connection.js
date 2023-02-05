const mongoose = require("mongoose");
require("dotenv").config();
const colors = require("colors");
//Connect to Database
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_CREDENTIALS, function (err) {
  if (err) {
    console.log("ERROR" + err);
  } else {
    console.log("--------------------------------".bgBlue);
    console.log("-----Connected To MongoDB-------".bgBlue);
  }
});

// Export connection
module.exports = mongoose.connection;
