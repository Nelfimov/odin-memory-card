import React from 'react';
import propTypes from 'prop-types';
import '../styles/Header.css';

const Header = (props) => {
  const {score, bestScore, restartGame} = props;

  return (
    <div className='header'>
      <div className='logo'>
        <h1>MEMORY CARD GAME</h1>
      </div>
      <div className='score'>
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
        <button type='button' onClick={restartGame}>Restart</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  score: propTypes.number.isRequired,
  bestScore: propTypes.number.isRequired,
  restartGame: propTypes.func.isRequired,
};

export default Header;
