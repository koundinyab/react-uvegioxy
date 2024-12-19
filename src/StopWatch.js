import React, { useState, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState({ seconds: 0, milliseconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const updatedMilliseconds = prevTime.milliseconds + 1; //1000 for millisecs
          const updatedSeconds =
            updatedMilliseconds >= 60 ? prevTime.seconds + 1 : prevTime.seconds;

          return {
            seconds: updatedSeconds,
            milliseconds: updatedMilliseconds % 60,
          };
        });
      }, 1000); // Update every 10ms for millisecs
    }
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime({ seconds: 0, milliseconds: 0 });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        {time.seconds}s : {time.milliseconds}ms
      </h1>
      <button onClick={startStopwatch} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}
