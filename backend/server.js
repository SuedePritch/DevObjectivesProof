/* eslint-disable*/
const express = require("express");
require("dotenv").config();
const db = require("./config/connection.js");
const colors = require("colors");
const PORT = process.env.PORT || 3000;
/*eslint-enable*/
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("./controllers"));
db.once("open", () => {
  app.listen(PORT, () => {
    console.log("--------------------------------".bgBlue);
    console.log("--API Running on PORT--".bgBlue, PORT, "---".bgBlue);
    console.log("--------------------------------".bgBlue);
  });
});
