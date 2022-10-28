import React from 'react';
import propTypes from 'prop-types';
import '../styles/Card.css';

/**
 * Function to create an image;
 * @param {Map} props
 * @return {JSX}
 */
const Card = (props) => {
  const {id, src, checkStack} = props;

  const handleClick = (e) => {
    const {id} = e.target;
    checkStack(parseInt(id));
  };

  return (
    <div className='card' key={id}>
      <img src={src} alt={id} id={id} onClick={handleClick} className='card'/>
    </div>
  );
};

Card.propTypes = {
  id: propTypes.number.isRequired,
  src: propTypes.string.isRequired,
  checkStack: propTypes.func.isRequired,
};

export default Card;
