import React, { useCallback, useEffect, useContext } from 'react';
import './pomodoro.css';
import context from './utils/context';
import ButtonStart from './components/buttonStart';
import ButtonPause from './components/buttonPause';
import ButtonReset from './components/buttonReset';
import PersonalInitialTime from './components/personalInitialTime';
import PersonalBreakTime from './components/personalBreakTime';
import ButtonSave from './components/buttonSave';
import ButtonPomodoroClassic from './components/pomodoroClassic';

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
    if (time === 0) return new Audio('./notification.mp3').play()
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
      <section className='buttonsPersonalTimer'>
      <p className='valuePersonalTime'>Personalizar tempo<i className='font'>(em segundos)</i></p>
      <ButtonPomodoroClassic />
      <p className='valuePersonalTime'>Pomodoro</p>
      <PersonalInitialTime />
      <p className='valuePersonalTime'>Intervalo</p>
      <PersonalBreakTime />
      <ButtonSave />
      </section>
    </div>
  );
};

export default Pomodoro;
