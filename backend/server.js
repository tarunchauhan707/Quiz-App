import dotenv from 'dotenv';
dotenv.config();
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';

import quizRoutes from './routes/quizRoutes.js';
import authRoutes from './routes/authRoutes.js';
import leaderboardRoutes from './routes/leaderboardRoutes.js';

import dbconnect from './config/db.js';
import path, { dirname } from 'path';

dbconnect(); // Connect to the database

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'], // Allow CORS for the frontend
  })
);

// Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// app.get('/', (req, res) => {
//   res.send('Welcome to the Quiz API!'); // Or return your home page
// });

const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder)); // Serve static files from the public folder

app.get('/', (req, res) => {
  const indexFilePath = path.join(publicFolder, 'index.html');
  res.sendFile(indexFilePath); // Send the index.html file for all other routes
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
