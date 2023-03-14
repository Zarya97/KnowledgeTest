import { useState } from "react";
import "./Cards.css";

const Cards = ({ question, answer, difficulty, imageUrl }) => {
  const [cardflip, setFlip] = useState(false);

  const handleCardFlip = () => {
    setFlip(!cardflip);
  };

  return (
    <div className="card" onClick={handleCardFlip}>
      <div className={`flip-card ${cardflip ? "flip-card-flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imageUrl} alt="artwork" />
            <p className="question">{question}</p>
            <div className={`difficulty ${difficulty}`}>
              {difficulty}
            </div>
          </div>
          <div className="flip-card-back">
            <p className="answer">Answer: {answer}</p>
            <div className={`difficulty ${difficulty}`}>
              {difficulty}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
