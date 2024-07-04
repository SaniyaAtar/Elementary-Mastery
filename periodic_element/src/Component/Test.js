import React, { useState } from 'react';
import { elements } from '../data/element';

const Test = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const getRandomElement = () => {
    const randomIndex = Math.floor(Math.random() * elements.length);
    setCurrentElement(elements[randomIndex]);
    setMessage('');
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === currentElement.name.toLowerCase()) {
      setMessage('Correct!');
    } else {
      setMessage('Try again!');
    }
    setUserAnswer('');
  };

  return (
    <div className="puzzle">
      <button onClick={getRandomElement}>New Element</button>
      {currentElement && (
        <>
          <div className="element-symbol">{currentElement.symbol}</div>
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="Enter element name"
          />
          <button onClick={checkAnswer}>Check Answer</button>
        </>
      )}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Test;
