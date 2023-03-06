import { useState } from 'react'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>The Ultimate Art Quiz</h1>
        <h3>How well do you know your art? Test it Here!!!</h3>
        <h4>Number of Cards: 10</h4>
      </div>
      <div className="card">
        <h1>Card</h1>
      </div>
      <div className="buttons">
      <button className="prevCard">⭠</button>
        <button className="nextCard">⭢</button>
      </div>
    </div>
  )
}

export default App