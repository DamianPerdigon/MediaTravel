import express from 'express';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';
import * as adminController from '../controllers/adminController.js';

const router = express.Router();

// Admin Routes

// GET /admin/users
// Accessible only by administrators.
// Retrieves a list of all users in the system.
// 'verifyToken' and 'verifyAdmin' middleware ensure that the requester is authenticated and has admin privileges.
router.get('/users', verifyToken, verifyAdmin, adminController.getAllUsers);

// PATCH /admin/user/:userId
// Accessible only by administrators.
// Updates the details of a specific user identified by 'userId'.
// 'verifyToken' and 'verifyAdmin' middleware enforce authentication and admin authorization.
router.patch('/user/:userId', verifyToken, verifyAdmin, adminController.updateUser);

// DELETE /admin/user/:userId
// Accessible only by administrators.
// Deletes a specific user identified by 'userId' from the system.
// 'verifyToken' and 'verifyAdmin' middleware check for valid authentication and admin rights.
router.delete('/user/:userId', verifyToken, verifyAdmin, adminController.deleteUser);

export default router;
