import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const totalStars = []

  for(let i=0; i<5; i++) {
    if(i < rating) {
      totalStars.push(
        <li className='star' key={i}>
          <FaStar />
        </li>
      )
    } else {
      totalStars.push(
        <li className='star-o' key={i}>
          <FaStar />
        </li>
      )
    }
  }
  return (
    <div className="rating">
      <ul>{totalStars}</ul>
    </div>
  );
};

export default Rating;
