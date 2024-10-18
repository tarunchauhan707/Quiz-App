import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Set baseURL to include /api
});

// Fetch all quizzes
export const fetchQuizzes = async () => {
  try {
    const response = await api.get('/quizzes');

    return response.data;
  } catch (error) {
    throw new Error('Error fetching quizzes: ' + error.message);
  }
};

// Fetch a specific quiz by ID
export const fetchQuiz = async (title) => {
    console.log(title)
  try {
    const response = await api.get(`/quizzes/${title}`); // Use template literals for consistency
  
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching quiz: ' + error.message);
  }
};

// Login user
export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

// Add a new quiz
export const addQuiz = async (quizData) => {
  try {
    const response = await api.post('/quizzes', quizData); // Ensure correct endpoint
    return response.data;
  } catch (error) {
    throw new Error('Error adding quiz: ' + error.message);
  }
};
