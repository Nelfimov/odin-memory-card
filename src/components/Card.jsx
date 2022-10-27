import React from 'react';

/**
 * Function to create an image;
 * @param {Number} id - ID of the card.
 * @param {String} src - path to the image.
 * @return {JSX}
 */
const Card = (id, src) => {
  return (
    <div className='card' id={id} key={id}>
      <img src={src} alt={id} className='card'/>
    </div>
  );
};

export default Card;
