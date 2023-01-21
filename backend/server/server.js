import express from "express";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
const app = express();
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

app.listen(PORT, () => {
  console.log(`API server listening on PORT ${PORT}`);
});
