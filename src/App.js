import React from 'react';
import Pomodoro from './pomodoro';
import Provider from './utils/provider';

function App() {
  return (
      <Provider>
        <Pomodoro />
      </Provider>
  );
}

export default App;
