import Quiz from '../models/Quiz.js'; // Ensure to add the .js extension

export const fetchQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const fetchQuiz = async (req, res) => {
  console.log("In fetchQuiz")
  try {
    const query = { title: req.params.title };
    const quiz = await Quiz.findOne(query);
  
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz by ID:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const addQuiz = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const quiz = new Quiz({ title, description, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    console.error('Error adding quiz:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
