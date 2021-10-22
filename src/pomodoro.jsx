import React, { useCallback, useEffect, useContext } from 'react';
import './pomodoro.css';
import context from './utils/context';
import ButtonStart from './components/buttonStart';
import ButtonPause from './components/buttonPause';
import ButtonReset from './components/buttonReset';

function Pomodoro() {

  const {
    initialTime,
    breakTime,
    runningMessage,
    breakMessage,
    time,
    setTime,
    reset,
    start,
    breakTimeState,
    setBreakTimeState,
    message,
    setMessage,
    timeOut
  } = useContext(context)

  function convertTime(timeInSeconds) {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0');
    const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, '0');
  
    return `${minutes}:${seconds}`
  }

  const startTimeMemoized = useCallback(() => (function startTime() {
  
    timeOut.current = setTimeout(() => {
      setTime(time - 1)
    }, 1000);
      
    if (time < 0) {
      clearTimeout(timeOut.current)
  
      if (!breakTimeState) {
        setBreakTimeState(true)
        setMessage(breakMessage)
        setTime(breakTime)
  
    } else {
      setBreakTimeState(false)
      setMessage(runningMessage)
      setTime(initialTime)
      }
    }
  })(), [
    initialTime,
    breakTime,
    runningMessage,
    breakMessage,
    time,
    setTime,
    breakTimeState,
    setBreakTimeState,
    setMessage,
    timeOut
  ])

  useEffect(() => {
    if (reset) return clearTimeout(timeOut.current)
    if (start) startTimeMemoized();
  }, [time, startTimeMemoized, reset, start, timeOut])

  return (
    <div className='pomodoro'>
      <section className='message'>
        <p>{message}</p>
      </section>
      <section className='timer'>
        <p>{ convertTime(time) }</p>
      </section>
      <section className='buttons'>
      <ButtonStart />
      <ButtonPause />
      <ButtonReset />
      </section>
    </div>
  );
};

export default Pomodoro;
