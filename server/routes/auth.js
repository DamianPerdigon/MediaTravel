import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// Authentication route

// POST /auth/login
// This route is responsible for handling user login requests.
// The 'login' controller processes the user's credentials and handles authentication.
router.post("/login", login);

export default router;
