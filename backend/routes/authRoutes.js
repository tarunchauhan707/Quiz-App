import express from 'express';
import { loginUser, register } from '../controllers/authController.js'; // Import both functions

const router = express.Router();

router.post('/auth/login', loginUser);
router.post('/auth/register', register); // Ensure this route exists if you want to register users

export default router; // Export the router
