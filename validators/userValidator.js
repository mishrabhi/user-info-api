const { check, validationResult } = require("express-validator");

const validateUser = [
  check("username").notEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  check("fullName").notEmpty().withMessage("Full Name is required"),
  check("gender")
    .isIn(["Male", "Female", "Others"])
    .withMessage("Invalid Gender"),
  check("dob").isDate().withMessage("Invalid Date of birth"),
  check("country").notEmpty().withMessage("Country is required"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateUser, validate };
