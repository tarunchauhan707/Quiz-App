import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../Question/Question';
import Result from '../Result/Result';
import ProgressBar from '../ProgressBar';
import { fetchQuiz } from '../../services/service';
import './Quiz.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Quiz = () => {
  const { title } = useParams();
  const [quiz, setQuiz] = useState(null);
  console.log("quiz", quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuiz(title);
        setQuiz(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, [title]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <Container className="mt-5" >
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center" >
            <Card.Header>
              <h1 style={{ color: '#179BAE' }}>{quiz.title}</h1>
            </Card.Header>
            <Card.Body>
              <ProgressBar currentQuestion={currentQuestionIndex} totalQuestions={quiz.questions.length} />
              {showResult ? (
                <Result userAnswers={userAnswers} questions={quiz.questions} />
              ) : (
                <Question
                  question={quiz.questions[currentQuestionIndex]}
                  onAnswer={handleAnswer}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Quiz;
