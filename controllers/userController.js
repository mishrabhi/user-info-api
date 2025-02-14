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

    const newUser = new User({
      username,
      email,
      password,
      fullName,
      gender,
      dob,
      country,
    });

    //Validate the user
    await newUser.validate();

    //Save into DB
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!", newUser });
  } catch (error) {
    console.log(error);

    // Handle validation errors specifically
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};
