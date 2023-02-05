const router = require("express").Router();
const { User } = require("../../models");

//This constains all the user routes as well as the add/delete friends
//Delete user will remove all thoughts made by that user

//GET ALL USERS
router.get("/", (req, res) => {
  User.find({})
    .select("-__v")
    .then(function (user) {
      res.status(200).json(user);
    });
});

//GET SINGLE USER
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .select("-__v")
    .then(function (user) {
      res.status(200).json(user);
    });
});
//LOGIN
router.post("/login", async (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then(function (user) {
    res.status(200).json(user);
  });
});
//SIGNUP
router.post("/signup", (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
  }).then(function (user) {
    res.status(200).json(user);
  });
});

//UPDATE USER
router.put("/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      username: req.body.username,
      email: req.body.email,
    },
    // Sets to true so updated document is returned; Otherwise original document will be returned
    { new: true }
  ).then(function (user) {
    res.status(200).json(user);
  });
});

//DELETE USER
router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    res.status(200).json(result);
  });
});
module.exports = router;
