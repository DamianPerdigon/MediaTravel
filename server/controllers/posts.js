import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE OPERATION */

// Handles creating a new post
export const createPost = async (req, res) => {
  try {
    // Extract required details from request body
    const { userId, description, picturePath } = req.body;

    // Fetch user data from the database
    const user = await User.findById(userId);

    // Create a new post object with provided and fetched data
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });

    // Save the post to the database
    await newPost.save();

    // Fetch and return all posts after adding the new post
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message }); // Handle any errors
  }
};

/* READ OPERATIONS */

// Fetches all posts for the feed
export const getFeedPosts = async (req, res) => {
  try {
    // Retrieve all posts from the database
    const post = await Post.find();
    res.status(200).json(post); // Send all posts as response
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};

// Fetches posts made by a specific user
export const getUserPosts = async (req, res) => {
  try {
    // Extract the user ID from request parameters
    const { userId } = req.params;

    // Retrieve posts made by the specified user
    const post = await Post.find({ userId });
    res.status(200).json(post); // Send the user's posts as response
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};

/* UPDATE OPERATION */

// Handles the liking of a post
export const likePost = async (req, res) => {
  try {
    // Extract post ID and user ID from request
    const { id } = req.params;
    const { userId } = req.body;

    // Find the post by ID
    const post = await Post.findById(id);

    // Check if the post is already liked by the user and toggle the like
    const isLiked = post.likes.get(userId);
    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    // Update the post with new like status
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost); // Send the updated post as response
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};
