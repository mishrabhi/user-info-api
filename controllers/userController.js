const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//register user
exports.registerUser = async (req, res) => {
  const { username, email, password, fullName, gender, dob, country } =
    req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });
    const user = await User.create({
      username,
      email,
      password,
      fullName,
      gender,
      dob,
      country,
    });
    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
