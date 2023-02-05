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
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(require("./controllers"));
db.once("open", () => {
  app.listen(PORT, () => {
    console.log("--API Running on PORT ".bgBlue, PORT.green, "----".bgBlue);
    console.log("--------------------------------".bgBlue);
  });
});
