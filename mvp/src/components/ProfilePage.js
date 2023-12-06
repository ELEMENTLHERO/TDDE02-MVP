import React, { useState } from 'react';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [mathLevel, setMathLevel] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMathLevelChange = (e) => {
    setMathLevel(e.target.value);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Math Level:
          <select value={mathLevel} onChange={handleMathLevelChange}>
            <option value="">Select Math Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ProfilePage;
