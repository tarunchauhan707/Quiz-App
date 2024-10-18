import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { fetchQuizzes } from '../../services/service';
export const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-4 justify-content-center">
      <h1 style={{ color: '#179BAE' }}>Available Quizzes</h1>
      <Row>
        {quizzes.map((quiz) => (
          <Col key={quiz.title} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ backgroundColor: '#EAF6F6', padding: '10px' }}>
              <Card.Body>
                <Card.Title>{quiz.title}</Card.Title>
                <Card.Text>{quiz.description}</Card.Text>
                <Link to={`/quiz/${quiz.title}`} style={{ backgroundColor: '#179BAE', borderColor: '#000' }} className="btn btn-primary">
                 Take Quiz
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuizList;
