import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

// Server and middleware setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json()); // Parse JSON bodies
app.use(helmet()); // Secure app by setting various HTTP headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common")); // HTTP request logger
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); // Serve static files

// Configure file storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets"); // Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  },
});
const upload = multer({ storage });

// Routes for file uploading
app.post("/auth/register", upload.single("picture"), register); // User registration
app.post("/posts", verifyToken, upload.single("picture"), createPost); // Create a new post

// API routes
app.use("/auth", authRoutes); // Authentication routes
app.use("/users", userRoutes); // User routes
app.use("/posts", postRoutes); // Post routes

// Mongoose setup for MongoDB
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    
    // Uncomment to add initial data to the database
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`)); // Error handling for database connection

