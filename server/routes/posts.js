import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Post-related routes

// READ Operations
router.get("/", verifyToken, getFeedPosts); // Retrieve all posts for the feed, with user authentication required
router.get("/:userId/posts", verifyToken, getUserPosts); // Fetch posts by a specific user, with user authentication required

// UPDATE Operations
router.patch("/:id/like", verifyToken, likePost); // Handle likes for a post, with user authentication required

export default router;
