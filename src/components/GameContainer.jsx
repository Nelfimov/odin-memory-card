import React from 'react';
import CardList from './CardList';
import propTypes from 'prop-types';
import '../styles/GameContainer.css';

const GameContainer = (props) => {
  const {checkStack, won} = props;

  const changeTitle = (string) => {
    return (
      <h2>{string}</h2>
    );
  };

  return (
    <div id='game-container' className='game-container'>
      {won ?
        changeTitle('You win!') :
        changeTitle('Click on image to continue')}
      <CardList checkStack={checkStack} />
    </div>
  );
};

GameContainer.propTypes = {
  checkStack: propTypes.func.isRequired,
  won: propTypes.bool.isRequired,
};

export default GameContainer;
