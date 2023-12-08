import React, { useState } from 'react';

const Question = ({ id, text, imageUrl, correctAnswer, userAnswer, onAnswerChange, isCorrect, solutionSteps }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="question-container" style={{ border: isCorrect !== null ? (isCorrect ? '2px solid green' : '2px solid red') : '' }}>
    <p>{text}</p>
    {imageUrl && <img src={imageUrl} alt="Question Illustration" className="question-image" />}
    <input type="text" value={userAnswer} onChange={(e) => onAnswerChange(id, e.target.value)} />
    {isCorrect === false && (
      <button onClick={() => setShowSolution(!showSolution)}>Show Solution</button>
    )}
    {showSolution && <div>{solutionSteps}</div>}
  </div>
  );
};

export default Question;
