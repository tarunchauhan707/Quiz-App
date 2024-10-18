import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { addQuiz } from '../../services/service';

const AddQuiz = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([{ text: '', options: [{ text: '', correct: false }] }]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleAddQuestion = () => {
    setQuestions([...questions, { text: '', options: [{ text: '', correct: false }] }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(updatedQuestions);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push({ text: '', correct: false });
    setQuestions(updatedQuestions);
  };

  const handleCorrectChange = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((option, index) => {
      option.correct = index === optionIndex;
    });
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const quizData = {
      title,
      description,
      questions,
    };
  
    try {
      // Call the addQuiz API function
      const result = await addQuiz(quizData);

      // Handle success
      setSuccess('Quiz created successfully!');
      setError(null); // Clear previous errors
      console.log(result); // Log the result from backend

      //re-direct to home page
      window.location.href = '/';
    } catch (error) {
      // Handle error
      console.error('Error:', error); // Log actual error for debugging
      setError(`Error creating quiz: ${error.message}`); // Display error message
      setSuccess(null); // Clear success message in case of error
    }
  };
  

  return (
    <Container>
      <h1 className="mt-4">Add Quiz</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="quizTitle">
          <Form.Label>Quiz Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter quiz title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        
        <Form.Group controlId="quizDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter quiz description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        {questions.map((question, questionIndex) => (
          <Card className="mb-3" key={questionIndex}>
            <Card.Body>
              <Row>
                <Col md={8}>
                  <Form.Group controlId={`question${questionIndex}`}>
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter question"
                      value={question.text}
                      onChange={(e) => {
                        const updatedQuestions = [...questions];
                        updatedQuestions[questionIndex].text = e.target.value;
                        setQuestions(updatedQuestions);
                      }}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4} className="d-flex align-items-center">
                  <Button variant="danger" onClick={() => handleRemoveQuestion(questionIndex)}>
                    Remove Question
                  </Button>
                </Col>
              </Row>

              {question.options.map((option, optionIndex) => (
                <Row key={optionIndex} className="mb-2">
                  <Col md={8}>
                    <Form.Group controlId={`option${questionIndex}-${optionIndex}`}>
                      <Form.Control
                        type="text"
                        placeholder="Enter option"
                        value={option.text}
                        onChange={(e) => handleOptionChange(questionIndex, optionIndex, e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="d-flex align-items-center">
                    <Form.Check
                      type="radio"
                      name={`correctOption${questionIndex}`}
                      label="Correct"
                      checked={option.correct}
                      onChange={() => handleCorrectChange(questionIndex, optionIndex)}
                    />
                  </Col>
                </Row>
              ))}

              <Button variant="secondary" onClick={() => handleAddOption(questionIndex)}>
                Add Option
              </Button>
            </Card.Body>
          </Card>
        ))}
        <div className="text-right display-flex">
        <Button variant="primary" onClick={handleAddQuestion} className="me-2">
            Add Question
        </Button>
        
        <Button type="submit" onclick={handleSubmit} variant="success" className="me-2">
            Submit Quiz
        </Button>
        </div>

      </Form>
    </Container>
  );
};

export default AddQuiz;
