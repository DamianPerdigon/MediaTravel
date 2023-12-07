import jwt from "jsonwebtoken";

/**
 * Middleware to verify JWT tokens in request headers.
 * 
 * This middleware extracts and verifies the JWT token from the Authorization header.
 * It is used to authenticate requests and ensure that the user is logged in.
 * If the token is valid, it appends the user's information to the request object.
 * If the token is invalid or not provided, it sends an error response.
 * 
 * @param {Object} req - The request object from Express.js
 * @param {Object} res - The response object from Express.js
 * @param {Function} next - The next middleware function in the stack
 */
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    // Check if the token is provided in the header
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    // Remove 'Bearer ' prefix if present
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // Verify the token with the secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user information to the request object
    req.user = verified;
    next(); // Proceed to the next middleware
  } catch (err) {
    // Handle errors, such as an invalid token
    res.status(500).json({ error: err.message });
  }
};
