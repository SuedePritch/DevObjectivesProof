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

app.get("/", (req, res) => {
  res.send(`
    <a href="/user">User</a>
    <h1>Basic Get</h1>
    `);
});
app.get("/user", (req, res) => {
  res.send(`
    <a href="/">Back</a>
    <h2>Welcome James Pritchard</h2>
    <p>age: 33</p>
    <p>height: 183cm</p>
    `);
});

app.post("/user", (req, res) => {
  res.send("Got a POST request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("--------------------------------".bgBlue);
    console.log("--API Running on PORT--".bgBlue, PORT, "---".bgBlue);
    console.log("--------------------------------".bgBlue);
  });
});
