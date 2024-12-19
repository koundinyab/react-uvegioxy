import React, { useState } from 'react';
import styles from './style.css';
export default function StartRating() {
  const ratingArray = [1, 2, 3, 4, 5];
  const [selectedRating, setSelectedRating] = useState(0);
  const selectRating = (rating) => {
    setSelectedRating(rating);
  };
  return (
    <>
      <div className="startContainer">
        {ratingArray.map((rating) => (
          <p
            className={rating === selectedRating ? 'selectedRating' : ''}
            onClick={() => selectRating(rating)}
          >
            {rating}
          </p>
        ))}
      </div>
      <p>{selectedRating}</p>
    </>
  );
}
