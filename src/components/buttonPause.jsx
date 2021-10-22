import React, { useContext } from 'react';
import context from '../utils/context';

function  ButtonPause() {

  const {
    timeOut,
    setStart
  } = useContext(context)

  const clickPause = () => {
    clearTimeout(timeOut.current)
    setStart(false)
  }

  return (
    <>
      <button
      className='button'
      onClick={ clickPause }
      >
      Pausar
      </button>
    </>
  );
}

export default ButtonPause;
