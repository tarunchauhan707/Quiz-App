// import React from 'react';

// const Question = ({ question, onAnswer }) => {
//   if (!question) return <div>Loading question...</div>;

//   return (
//     <div className="question-container">
//       <h3 className="question-text">{question.text}</h3>
//       <div className="options-container">
//         {question.options.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => onAnswer(option)}
//             className="option-button"
//             aria-label={`Option ${index + 1}: ${option.text}`}
//           >
//             {option.text}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Question;
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Question = ({ question, onAnswer }) => {
  if (!question) return <div>Loading question...</div>;

  return (
    <Row className="justify-content-center mt-4">
      <Col md={8}>
        <Card style={{ backgroundColor: '#EAF6F6', padding: '20px' }}>
          <Card.Body>
            <Card.Title >{question.text}</Card.Title>
            <div className="options-container mt-3">
              {question.options.map((option, index) => (
                <Button
                  key={option._id} // Ensure key is unique
                  onClick={() => onAnswer(option)}
                  className="option-button mb-2"
                  style={{ backgroundColor: '#179BAE', borderColor: '#179BAE', color: '#fff' }}
                  block
                  aria-label={`Option ${index + 1}: ${option.text}`}
                >
                  {option.text} {/* Ensure this is a string */}
                </Button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Question;




