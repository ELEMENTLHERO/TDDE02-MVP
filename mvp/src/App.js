import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import React, { useState } from 'react';
import ProfilePage from './components/ProfilePage';
import MathChapter from './components/MathChapter';
import './App.css'; // Import your CSS file
import ChapterDetail from './components/ChapterDetail';

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <nav>
            <ul>
              <li>
                <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
              </li>
              <li>
                <Link to="/math-chapter" onClick={() => setOpen(false)}>Math Chapter</Link>
              </li>
              {/* More links */}
            </ul>
          </nav>
        )}
        <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/math-chapter" element={<MathChapter courseName="Math 2b" chapters={["Algebra", "Logarithic", "Statistics", "Functions and Graphs"]} />} />
            <Route path="/chapter/:courseName/:chapterName" element={<ChapterDetail />} />
          {/* More routes */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
