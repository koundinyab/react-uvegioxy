import React, { useState } from 'react';
import './style.css';

export default function DelayedCounter() {
  const [counter, setCounter] = useState(0);
  const counterIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const delayedIncrement = () => {
    setTimeout(() => {
      setCounter((counter) => counter + 5);
    }, 2000);
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={counterIncrement}> counter</button>
      <button onClick={delayedIncrement}>delayed counter</button>
    </>
  );
}
