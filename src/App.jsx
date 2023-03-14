import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import cardPairs from "./cards";

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cardPairs.length - 1 : prevIndex - 1
    );
    document.getElementById("answer-input").value = "";
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cardPairs.length - 1 ? 0 : prevIndex + 1
    );
    document.getElementById("answer-input").value = "";
  };

  const handleUserGuess = () => {
    const userGuess = document.getElementById("answer-input").value;
    const correctAnswer = cardPairs[currentCardIndex].answer;
    if (userGuess === correctAnswer) {
      document.getElementById("answer-input").style.borderColor = "green";
    } else {
      document.getElementById("answer-input").style.borderColor = "red";
    }
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleShuffle = () => {
    shuffle(cardPairs);
    document.getElementById("answer-input").value = "";
  };

  return (
    <div className="App">
      <div className="header">
        <h1>The Ultimate Art Quiz</h1>
        <h3>How well do you know your art? Test it Here!!!</h3>
        <h4>Number of Cards: {cardPairs.length}</h4>
      </div>
      <div className="card">
        <Cards {...cardPairs[currentCardIndex]} />
      </div>
      <div className="guessBox">
        <p>Guess your answer here: </p>
        <input type="text" id="answer-input" placeholder="Enter your answer"/>
        <button id="submit-btn" onClick={handleUserGuess}>Submit</button>
      </div>
      <div className="buttons">
        <button className="prevCard" onClick={handlePrevCard}>
          ⭠
        </button>
        <button className="nextCard" onClick={handleNextCard}>
          ⭢
        </button>
        <button id="shuffle-btn" onClick={handleShuffle}>
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default App;
