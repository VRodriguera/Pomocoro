import React, { useContext } from 'react';
import context from '../utils/context';

function PersonalInitialTime() {
  const {
    initialTime,
    setInitialTime
  } = useContext(context);

  const clickIncrement = () => {
    if (initialTime > 0 || initialTime === 0) setInitialTime(initialTime + 5)
  }

  const clickDecrement = () => {
    if (initialTime > 0) setInitialTime(initialTime - 5)
  }

  return (
    <div className='PersonalTime'>
      <button
      className='buttonPersonalTime'
      onClick={ clickDecrement  }
      >
      -
      </button>
      <p className='valuePersonalTime'>
        { initialTime }
      </p>
      <button
      className='buttonPersonalTime'
      onClick={ clickIncrement }
      >
      +
      </button>
    </div>
  );
}

export default PersonalInitialTime;
