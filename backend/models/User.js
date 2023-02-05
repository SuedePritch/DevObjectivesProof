const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

//User schema
//username of the user needs to be unique
//email needs to be unique and valid email structure(should send confirmation email to confirm)

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
      },
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = model("User", UserSchema);

const handleError = (err) => console.error(err);

//Seed a single user
User.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    User.create(
      {
        username: "james",
        email: "james@gmail.com",
        password: "password",
      },
      (err) => (err ? handleError(err) : console.log("Created new document"))
    );
  }
});

module.exports = User;
