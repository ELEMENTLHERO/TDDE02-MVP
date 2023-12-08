import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from './Question';

const ChapterDetail = () => {
  let { chapterName } = useParams();
  const [questions, setQuestions] = useState([]);
  const [showAltQuestions, setShowAltQuestions] = useState(false);

  const generateNewQuestions = () => {
    // Switch to showing alternative questions for those answered incorrectly
    setQuestions(questions.map(q => 
      q.isCorrect === false ? 
      { ...findQuestionById(q.altQuestion), isShown: true } : 
      { ...q, isShown: q.isCorrect = false } // Hide questions answered correctly
    ));
    setShowAltQuestions(true);
    setHasCheckedAnswers(false);
  };

  // Find a question by ID
  const findQuestionById = (id) => questions.find(q => q.id === id);
  const [hasCheckedAnswers, setHasCheckedAnswers] = useState(false);

  
  useEffect(() => {
    // Dummy data for questions - replace with real questions later
    const questionsData = {
      "Algebra": [
        {
          id: 1,
          text: "Solve for x: 2x + 3 = 11",
          correctAnswer: "4",
          userAnswer: "",
          isCorrect: null,
          solutionSteps: (<>
            Subtract 3 from both sides and then divide by 2.
            <br />
            This gives x = 4
          </>),
          isShown: true,
          altQuestion: 3 // ID of another question
        },
        {
          id: 2,
          text: "What is the result of (x - 2)(x + 3)?",
          correctAnswer: "x^2 + x - 6",
          userAnswer: "",
          isCorrect: null,
          solutionSteps: "Expand the brackets.",
          isShown: true,
          altQuestion: 4 // ID of another question
        },
        {
          id: 3,
          text: "Solve for x: 4x - 3 = 9",
          correctAnswer: "4",
          userAnswer: "",
          isCorrect: null,
          solutionSteps: (<>"Add 3 to both sides and then divide by 4. <br/> This gives x = 3"</>),
          isShown: false,
          altQuestion: 1 // ID of another question
        },
        {
          id: 4,
          text: "What is the result of (x - 2)(x - 2)?",
          correctAnswer: "x^2 - 4x + 4",
          userAnswer: "",
          isCorrect: null,
          solutionSteps: "Expand the brackets. Also note that (a-b)^2 = a^2-2ab+b^2",
          isShown: false,
          altQuestion: 2 // ID of another question
        },
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
    setQuestions(questions.map(q => q.isShown ? { ...q, isCorrect: q.userAnswer === q.correctAnswer } : q));
    setHasCheckedAnswers(true);
  };

  return (
    <div className="page-container">
    <h1>{chapterName}</h1>
    {questions.filter(q => q.isShown).map((q) => (
      <Question
        key={q.id}
        {...q}
        onAnswerChange={handleAnswerChange}
        isCorrect={q.isCorrect}
      />
    ))}
    <button onClick={checkAnswers}>Check Answers</button>
    <button onClick={generateNewQuestions} disabled={!hasCheckedAnswers}>New Questions</button>
  </div>
  );
};

export default ChapterDetail;
