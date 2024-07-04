import React from 'react';

const PuzzlePiece = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/images/card-back.png" // The back of the card image
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default PuzzlePiece;
