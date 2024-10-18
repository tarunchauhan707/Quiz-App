import express from 'express';
import { getLeaderboard, updateScore } from '../controllers/leaderboardController.js'; // Ensure to add the .js extension

const router = express.Router();

router.get('/leaderboard', getLeaderboard);
router.post('/leaderboard/update', updateScore);

export default router;
