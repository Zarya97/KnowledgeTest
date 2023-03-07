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
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cardPairs.length - 1 ? 0 : prevIndex + 1
    );
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
      <div className="buttons">
        <button className="prevCard" onClick={handlePrevCard}>
          ⭠
        </button>
        <button className="nextCard" onClick={handleNextCard}>
          ⭢
        </button>
      </div>
    </div>
  );
};

export default App;
