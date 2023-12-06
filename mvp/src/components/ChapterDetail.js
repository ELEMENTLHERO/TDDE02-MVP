import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';

const ChapterDetail = () => {
  let { chapterName } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Dummy data for questions - replace with real questions later
    const questionsData = {
      "Algebra": [
        { id: 1, text: "Solve for x: 2x + 3 = 11", correctAnswer: "4", solutionSteps: "Subtract 3 from both sides and then divide by 2.", isCorrect: null },
        { id: 2, text: "What is the result of (x - 2)(x + 3)?", correctAnswer: "x^2 + x - 6", solutionSteps: "Expand the brackets.", isCorrect: null },
      ],
      "Functions and Graphs": [
        { id: 1, text: "Identify the type of graph represented in the image.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Us_unemployment_rates_1950_2005.png", correctAnswer: "Line Graph", solutionSteps: "Git Gud.", isCorrect: null },
      ],
    };
  
    setQuestions(questionsData[chapterName] || []);
  }, [chapterName]);
  

  const handleAnswerChange = (questionId, answer) => {
    setQuestions(questions.map(q => q.id === questionId ? { ...q, userAnswer: answer } : q));
  };

  const checkAnswers = () => {
    setQuestions(questions.map(q => ({ ...q, isCorrect: q.userAnswer === q.correctAnswer })));
  };

  const revealSolution = (questionId) => {
    // Logic to reveal the solution for a specific question
  };

  return (
    <div className="page-container">
        <h1>{chapterName}</h1>
        {questions.map((q) => (
        <Question key={q.id} {...q} onAnswerChange={handleAnswerChange} isCorrect={q.isCorrect} />
        ))}
        <button onClick={checkAnswers}>Check Answers</button>
  </div>
  );
};

export default ChapterDetail;
