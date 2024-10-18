import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizList } from './components/QuizList/QuizList';
import { Quiz } from './components/Quiz/Quiz';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Login from './components/Login/Login';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Result from './components/Result/Result';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AddQuiz from './components/Addquizzes/Addquizzes';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
      <main className="content">
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:title" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/addquiz" element={<AddQuiz />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
    
  );
};

export default App;
