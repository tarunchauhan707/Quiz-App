// import React from 'react';

// const Result = ({ userAnswers = [], questions = [] }) => {
//   // Ensure userAnswers and questions are defined and are arrays
//   if (!Array.isArray(userAnswers) || !Array.isArray(questions)) {
//     return <p>Error: Invalid data provided</p>;
//   }

//   // Calculate score by comparing userAnswers with correct answers from questions
//   const score = userAnswers.reduce((acc, currentAnswer, index) => {
//     // const correctOption = questions[index].options.find(option => option.correct === true);
//     // if (currentAnswer === correctOption.text) {
//     //   return acc + 1;
//     // }
//     // return acc;
//   }, 0);

//   return (
//     <div className="result-container">
//       <h2>Quiz Result</h2>
//       <p>You scored {score} out of {questions.length}.</p>
//       <div className="answers-review">
//         {questions.map((question, index) => {
//           const correctOption = question.options.find(option => option.correct === true);

//           return (
//             <div key={index} className="question-result">
//               <h4>{question.text}</h4>
//               <p>
//                 Your answer: <strong>{userAnswers[index] || 'N/A'}</strong> <br />
//                 Correct answer: <strong>{correctOption?.text || 'N/A'}</strong>
//               </p>
//               {userAnswers[index] === correctOption?.text ? (
//                 <p className="correct">Correct</p>
//               ) : (
//                 <p className="incorrect">Incorrect</p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Result;

// const Result = ({ userAnswers, questions }) => {
//   const score = userAnswers.reduce((acc, current, index) => {
//     // Compare based on actual structure
//     console.log('questions[index].correctAnswer :' , questions[index]);
//     console.log('current.text :' , current);
//     let options = questions[index].options;
//     // options.map((options)=>{
//       if (current.text === options.text && options.correct === true) {
//         console.log('options.correct :' , options.correct);
//         console.log(acc);
//         return acc + 1;
//       }
//       return acc;
//     // })
//   }, 0);
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ userAnswers, questions }) => {
  const score = userAnswers.reduce((acc, current, index) => {
    const options = questions[index].options;
    const correctOption = options.find(option => option.correct === true);
    return current.text === correctOption.text ? acc + 1 : acc;
  }, 0);

  const totalQuestions = questions.length;
  const accuracy = ((score / totalQuestions) * 100).toFixed(2); // Calculate accuracy in percentage

  // Prepare data for Pie chart
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [score, totalQuestions - score],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };

  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>You scored {score} out of {totalQuestions}.</p>
      <p>Accuracy: {accuracy}%</p>

      {/* Pie Chart */}
      <div style={{ width: '30%', height: '30%', margin: '0 auto' }}>
        <Pie data={data} width={100} height={100} />
      </div>

      <div className="answers-review mt-3">
        <h3>Answers Overview</h3>
        {questions.map((question, index) => (
          <div key={index} className="question-result">
            <h4>{question.text}</h4>
            <p>
              Your answer: <strong>{userAnswers[index].text}</strong> <br />
              Correct answer: <strong>{question.options.find(option => option.correct === true)?.text}</strong>
            </p>
            {userAnswers[index]?.text === question.options.find(option => option.correct === true)?.text ? (
              <p style={{ color: 'green', fontWeight: 'bold' }}>
              <FaCheckCircle style={{ marginRight: '5px' }} /> Correct
            </p>
          ) : (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              <FaTimesCircle style={{ marginRight: '5px' }} /> Incorrect
            </p>
             )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
