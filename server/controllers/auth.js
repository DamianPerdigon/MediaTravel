import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER OPERATION */

// Handles new user registration
export const register = async (req, res) => {
  try {
    // Destructure and extract user details from request body
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // Encrypt the user's password for secure storage
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user object with hashed password and provided details
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      // Generate random numbers for profile views and impressions
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Send the saved user as response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle any errors
  }
};

/* USER LOGIN OPERATION */

// Handles user login
export const login = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;

    // Fetch the user from the database by email
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    // Compare provided password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    // Generate a JWT token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Remove password before sending user details
    delete user.password;
    res.status(200).json({ token, user }); // Send token and user details as response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle any errors
  }
};
