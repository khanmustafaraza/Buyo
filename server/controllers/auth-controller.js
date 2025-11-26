const {
  generateHashPassword,
  comparePassword,
} = require("../helpers/password");
const { createToken } = require("../helpers/token");
const Register = require("../models/register-model");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return next({ message: "All fields are required", statusCode: 400 });
    }
    const exsistRegister = await Register.findOne({ email: email });
    if (exsistRegister) {
      return next({ message: "Email Already Exist", statusCode: 400 });
    }
    const hashPassword = await generateHashPassword(password);

    const newRegister = new Register({
      name,
      email,
      password: hashPassword,
    });
    const savedRegister = await newRegister.save();

    if (savedRegister) {
      res.success(null, "User created successfully!", 201);
    }
  } catch (error) {
    next({ message: "Error while creating account", statusCode: 500 });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({ message: "All fields are required", statusCode: 400 });
  }
  const existUser = await Register.findOne({ email }).select("+password");

  if (!existUser) {
    next({ message: "Invalid Credentials Email Or Password kallu this is that" });
  }

  const checkPassword = await comparePassword(password, existUser.password);
  if (!checkPassword) {
    next({ message: "Invalid Credentials Email Or Password" });
  }
  const token = createToken({
    _id: existUser._id,
    email: existUser.email,
    isAdmin: existUser.isAdmin,
  });
  // console.log(token);

  res.status(200).json({
    success: true,
    msg: "Login SuccessFully",
    token,
  });
};

module.exports = { register, login };
