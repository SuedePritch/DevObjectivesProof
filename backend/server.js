/* eslint-disable*/
const express = require("express");
require("dotenv").config();
const db = require("./config/connection.js");
const colors = require("colors");
const PORT = process.env.PORT || 3000;
const { authMiddleware } = require("./utils/auth");
/*eslint-enable*/
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "https://dev-objectives-proof.vercel.app"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(require("./controllers"));
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(
      colors.bgBlue("--API Running on PORT "),
      colors.green(PORT),
      colors.bgBlue("----")
    );
    console.log(colors.bgBlue("--------------------------------"));
  });
});
module.exports = app;
