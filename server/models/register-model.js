const { Schema, model } = require("mongoose");

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // No duplicate emails
      lowercase: true, // Always save in lowercase
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"], // Basic email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Security: enforce min length
      select: false, // Hide password by default
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Register = model("Register", registerSchema);

module.exports = Register;
