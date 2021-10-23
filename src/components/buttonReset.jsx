import React, { useContext } from 'react';
import context from '../utils/context';

function ButtonReset() {

  const {
    setTime,
    setMessage,
    setBreakTimeState,
    setReset,
    initialTime,
    runningMessage,
  } = useContext(context)

  const clickReset = () => {
    setTime(initialTime)
    setMessage(runningMessage)
    setBreakTimeState(false)
    setReset(true)
    new Audio('./click.mp3').play()
  }

  return (
    <>
      <button
      className='button'
      onClick={ clickReset }
      >
      Resetar
      </button>
    </>
  );
}

export default ButtonReset;
