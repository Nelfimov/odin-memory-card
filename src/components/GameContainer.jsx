import React from 'react';
import CardList from './CardList';

const GameContainer = () => {
  return (
    <div id='game-container' className='game container'>
      <h2>Pick a card</h2>
      <CardList />
    </div>
  );
};

export default GameContainer;
