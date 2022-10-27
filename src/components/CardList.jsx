/* eslint-disable new-cap */
import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';
import Image1 from '../images/1.png';
import Image2 from '../images/2.png';
import Image3 from '../images/3.png';
import Image4 from '../images/4.png';
import Image5 from '../images/5.png';
import Image6 from '../images/6.png';
import Image7 from '../images/7.png';
import Image8 from '../images/8.png';
import Image9 from '../images/9.png';
import '../styles/CardList.css';

const IMAGES_LIST = [
  {id: 1, src: Image1},
  {id: 2, src: Image2},
  {id: 3, src: Image3},
  {id: 4, src: Image4},
  {id: 5, src: Image5},
  {id: 6, src: Image6},
  {id: 7, src: Image7},
  {id: 8, src: Image8},
  {id: 9, src: Image9},
];

/**
 * Generate and render all cards
 * @param {Map} props
 * @return {JSX}
 */
const CardList = (props) => {
  const {checkStack} = props;

  return (
    <div className='card-container'>
      {IMAGES_LIST.map((image) => (
        <Card
          id={image.id}
          key={image.id}
          src={image.src}
          checkStack={checkStack}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  checkStack: propTypes.func.isRequired,
};

export default CardList;
