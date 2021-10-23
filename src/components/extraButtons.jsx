import React, { useContext } from 'react';
import context from '../utils/context';

function ExtraButtons() {

  const {
    setInitialTime,
    setBreakTime
  } = useContext(context)

  const click25min = () => {
    setInitialTime(1500)
    setBreakTime(300)
    new Audio('./click.mp3').play()
  }

  const click25s = () => {
    setInitialTime(25)
    setBreakTime(5)
    new Audio('./click.mp3').play()
  }

  return (
    <div className='buttons'>
      <button
      className='button'
      onClick={ click25min }
      >
      Pomodoro 25min
      </button>
      <button
      className='button'
      onClick={ click25s }
      >
      Pomodoro 25s
      </button>
    </div>
  );
}

export default ExtraButtons;
