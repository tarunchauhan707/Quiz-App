import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  correct: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: { type: [questionSchema], required: true }, 
});

const Quiz = mongoose.model('Quiz', quizSchema,'quizzes');

export default Quiz;
