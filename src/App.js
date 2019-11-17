import React, { useRef } from 'react';

import TrackerContainer from './components/tracker-container';

import './App.css';

const App = props => {
  const container = useRef();
  
  
  return (
      <div className="App" ref={container}>
        <header className="App-header"></header>
        <TrackerContainer />
      </div>
  );
}

export default App;
