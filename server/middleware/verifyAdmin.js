/**
 * Middleware to verify if the requesting user has admin privileges.
 * 
 * This middleware function checks the user's role attached to the request.
 * It ensures that the user has an 'admin' role to access certain routes.
 * If the user is an admin, the middleware allows the request to proceed.
 * Otherwise, it returns a 403 (Forbidden) status with a message.
 * 
 * @param {Object} req - The request object from Express.js
 * @param {Object} res - The response object from Express.js
 * @param {Function} next - The next middleware function in the stack
 */
export const verifyAdmin = (req, res, next) => {
  // Check if the user exists and has an 'admin' role
  if (req.user && req.user.role === "admin") {
    next(); // User is an admin, proceed to the next middleware
  } else {
    // User is not an admin, send a 403 Forbidden response
    res.status(403).json("No tienes permiso para realizar esta acción");
  }
};
