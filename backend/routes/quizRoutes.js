import express from 'express';
import { fetchQuizzes, fetchQuiz, addQuiz } from '../controllers/quizController.js'; // Ensure to add the .js extension

const router = express.Router();

router.get('/', fetchQuizzes);
router.get('/:title', fetchQuiz);
router.post('/', addQuiz);

export default router;
