import '../styles/App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import GameContainer from './GameContainer';

/**
 * Game logic is here
 * @return {JSX} JSX
 */
const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [stack, setStack] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    setBestScore((prevState) => (prevState < score ? score : prevState));
  }, [score]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const resetScore = () => {
    setScore(0);
  };

  const addToStack = (id) => {
    setStack(stack.concat(id));
  };

  const emptyStack = () => {
    setStack([]);
  };

  const checkStack = (id) => {
    if (!stack.some((item) => item === id)) {
      addToStack(id);
      incrementScore();
      if (stack.length === 9) {
        switchWon();
      };
    } else {
      emptyStack();
      resetScore();
    };
  };

  const restartGame = () => {
    setScore(0);
    setBestScore(0);
  };

  const switchWon = () => {
    setWon(!won);
    restartGame();
  };

  return (
    <div id='App' className='App'>
      <Header
        score={score}
        bestScore={bestScore}
        restartGame={restartGame}
      />
      <GameContainer
        checkStack={checkStack}
        won={won}
      />
    </div>
  );
};

export default App;
