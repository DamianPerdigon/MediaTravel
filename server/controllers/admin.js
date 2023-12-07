import User from '../models/User.js';

/**
 * Fetch all users. This endpoint is intended for admin use.
 * @param req - The request object.
 * @param res - The response object.
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password for security
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

/**
 * Update a specific user. This endpoint is intended for admin use.
 * @param req - The request object containing userId in params and update data in the body.
 * @param res - The response object.
 */
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

/**
 * Delete a specific user. This endpoint is intended for admin use.
 * @param req - The request object containing userId in params.
 * @param res - The response object.
 */
export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
