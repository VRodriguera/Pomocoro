import React, { useContext } from 'react';
import context from '../utils/context';

function PomodoroClassic() {

  const {
    setInitialTime,
    setBreakTime
  } = useContext(context)

  const click = () => {
    setInitialTime(1500)
    setBreakTime(300)
  }

  return (
    <>
      <button
      className='button'
      onClick={ click }
      >
      Pomodoro classico
      </button>
    </>
  );
}

export default PomodoroClassic;
