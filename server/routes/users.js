import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// User-related routes

// READ Operations
router.get("/:id", verifyToken, getUser); // Get a single user by ID, ensuring the user is authenticated
router.get("/:id/friends", verifyToken, getUserFriends); // Get friends of a user by user ID, ensuring the user is authenticated

// UPDATE Operations
router.patch("/:id/:friendId", verifyToken, addRemoveFriend); // Add or remove a friend, ensuring the user is authenticated

export default router;
