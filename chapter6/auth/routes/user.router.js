const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  try {
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

const login = async (req, res) => {
  //checking if user exists in the database
  const user = await User.findOne({ username: req.body.username });
  !user && res.status(404).json({ message: "user not found" });

  const accessToken = jwt.sign(
    {
      user: user,
    },
    process.env.JWT_KEY
  );

  const { password, ...others } = user._doc;

  try {
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(401).json("not otherized");
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, { $set: req.body });
  try {
    res.status(200).json("updated");
  } catch (err) {}
};

module.exports = { register, login, update };
