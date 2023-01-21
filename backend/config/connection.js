const mongoose = require("mongoose");
require("dotenv").config();

//Connect to Database
mongoose.connect(process.env.MONGO_CREDENTIALS, function (err) {
  if (err) {
    console.log("ERROR" + err);
  } else {
    console.log(`Connected to MongoDB database`);
  }
});

// Export connection
module.exports = mongoose.connection;
