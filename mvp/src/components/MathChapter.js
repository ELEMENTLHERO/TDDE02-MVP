import React from 'react';
import { Link } from 'react-router-dom';

const MathChapter = ({ courseName, chapters }) => {
  return (
    <div className="math-chapter-container">
      <h1>{courseName}</h1>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>
            <Link to={`/chapter/${courseName}/${chapter}`}>{chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MathChapter;
