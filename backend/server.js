/* eslint-disable*/
const express = require("express");
const path = require("path");
require("dotenv").config();
const db = require("./config/connection.js");
const colors = require("colors");
const PORT = process.env.PORT || 3000;
const { authMiddleware } = require("./utils/auth");
/*eslint-enable*/
let url;
if (process.env.ENVIRONMENT === "development") {
  url = "http://localhost:3000";
} else if (process.env.ENVIRONMENT === "production") {
  url = "https://dev-objectives-proof.vercel.app";
}

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", url);
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

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
module.exports = app;
