const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

//POST /users
//ACCESS PUBLIC
const signupUser = asyncHandler(async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    //Check is user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (user) {
      const token = generateToken(user._id);
      res.status(201).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: token,
      });
      res.end();
    }
  } catch (err) {
    next(err);
  }
});

//POST /user/login
//ACCESS PUBLIC
const loginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user),
      });
    }
    res.end();
  } catch (err) {
    next(err);
  }
});

//Generate JWT
const generateToken = ({ email, id }) => {
  const payload = { email, id };
  return jwt.sign({ data: payload }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//GET /users/me
//ACCESS PRIVATE
const getMyUser = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json(req.user);
    res.end();
  } catch (err) {
    next(err);
  }
});
const updateMyUser = asyncHandler(async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    (user.username = req.body.username || user.username),
      (user.email = req.body.email || user.email),
      (user.password = req.body.password || user.password),
      await user.save();
    res.status(200).json(user);
    res.end();
  } catch (err) {
    next(err);
  }
});
const deleteMyUser = asyncHandler(async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOneAndDelete({ email });
    res.status(200).json("Deleted User", user);
    res.end();
  } catch (err) {
    next(err);
  }
});
module.exports = {
  signupUser,
  loginUser,
  getMyUser,
  updateMyUser,
  deleteMyUser,
};
