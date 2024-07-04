import React, { useState, useEffect } from 'react';
import PuzzlePiece from './PuzzlePiece';

// Function to simulate fetching random periodic element images
const fetchRandomElementImages = () => {
  const elements = [
    
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2ZeZGyaTzA0VIiHRsRStxQfcjXOmlgsuog&s',   
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmQdDjK57pp_sKBIwsO9XnaeVN091vnvy7A&s',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvl_I5FHzGACKrMm24MCk9l8kH05IRfmVnlu_2C1J9vlNawMeAfSsjLcBtdLxm6FxKvOU&usqp=CAU',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkMfq30nrZYdaYvMrxew0FUgsS5bCntlWaA&s',
     

    // Add more element images as needed
  ];
  return elements.sort(() => 0.5 - Math.random()).slice(0, 6);
};

const Puzzle = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // Shuffle and create a new game
  const shuffleCards = () => {
    const elementImages = fetchRandomElementImages();
    const cardImages = elementImages.map((src) => ({ src, matched: false }));
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a card click
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices & increment turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="memory-game">
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <PuzzlePiece
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default Puzzle;
