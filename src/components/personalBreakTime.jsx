import React, { useContext } from 'react';
import context from '../utils/context';

function PersonalBreakTime() {
  const {
    breakTime,
    setBreakTime
  } = useContext(context);

  const clickIncrement = () => {
    if (breakTime > 0 || breakTime === 0) setBreakTime(breakTime + 5)
  }

  const clickDecrement = () => {
    if (breakTime > 0) setBreakTime(breakTime - 5)
  }

  return (
    <div className='PersonalTime'>
      <button
      className='buttonPersonalTime'
      onClick={ clickDecrement  }
      >
      -
      </button>
      <p className='valuePersonalTime'
      >
        { breakTime }
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

export default PersonalBreakTime;
