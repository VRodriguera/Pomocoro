import React, { useState, useRef } from 'react';
import context from './context';

function Provider({ children }) {
  const [initialTime, setInitialTime] = useState(25)
  const [breakTime, setBreakTime ] = useState(5)
  const runningMessage = 'Pomodoro';
  const breakMessage = 'Intervalo';
  const [time, setTime] = useState(initialTime);
  const [reset, setReset] = useState(false);
  const [start, setStart] = useState(false);
  const [breakTimeState, setBreakTimeState] = useState(false);
  const [message, setMessage] = useState(runningMessage)
  const timeOut = useRef()

  const contextValue = {
    initialTime,
    setInitialTime,
    breakTime,
    setBreakTime,
    runningMessage,
    breakMessage,
    time,
    setTime,
    reset,
    setReset,
    start,
    setStart,
    breakTimeState,
    setBreakTimeState,
    message,
    setMessage,
    timeOut
};

return (
  <context.Provider value={ contextValue }>
    {children}
  </context.Provider>
);
};

export default Provider;
