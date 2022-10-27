/* eslint-disable no-unused-vars */
import '../styles/App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import GameContainer from './GameContainer';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setBestScore((prevState) => (prevState < score ? score : prevState));
  }, [score]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const restartGame = () => {
    setScore(0);
    setBestScore(0);
  };

  return (
    <div id='App' className='App'>
      <Header score={score} bestScore={bestScore} restartGame={restartGame}/>
      <GameContainer />
    </div>
  );
};

export default App;
