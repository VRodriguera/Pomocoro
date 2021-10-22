import React, { useContext } from 'react';
import context from '../utils/context';

function ButtonStart() {

  const {
    setStart,
    setReset
  } = useContext(context)

  const clickStart = () => {
    setStart(true);
    setReset(false);
  }

  return (
    <>
      <button
      className='button'
      onClick={ clickStart }
      >
      Iniciar
      </button>
    </>
  );
}

export default ButtonStart;
