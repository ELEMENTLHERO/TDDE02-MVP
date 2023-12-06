import React from 'react';

const Question = ({ id, text, imageUrl, correctAnswer, userAnswer, onAnswerChange, isCorrect }) => {
  return (
    <div className="question-container" style={{ border: isCorrect !== null ? (isCorrect ? '2px solid green' : '2px solid red') : '' }}>
      <p>{text}</p>
      {imageUrl && <img src={imageUrl} alt="Question Illustration" className="question-image" />}
      <input type="text" value={userAnswer} onChange={(e) => onAnswerChange(id, e.target.value)} />
    </div>
  );
};

export default Question;
