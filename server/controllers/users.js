import User from "../models/User.js";

/* READ OPERATIONS */

// Retrieves a specific user by their ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id); // Fetch user from database
    res.status(200).json(user); // Send user data as response
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};

// Fetches friends of a specific user
export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id); // Fetch user from database

    // Fetch each friend's details using their IDs
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    // Format friend data for response
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends); // Send friend data as response
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};

/* UPDATE OPERATIONS */

// Adds or removes a friend for a user
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id); // Fetch the user
    const friend = await User.findById(friendId); // Fetch the friend

    // Check if already friends and add/remove accordingly
    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    // Fetch updated friend list
    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    // Format and send the updated friend list
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends); // Send updated friend data
  } catch (err) {
    res.status(404).json({ message: err.message }); // Handle errors
  }
};
