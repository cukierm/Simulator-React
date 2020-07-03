import React from 'react';
import { Navbar } from 'reactstrap';
import './App.css';
import SimulatorContainer from './components/SimulatorContainerComponent.js';

function App() {
  return (
    <div>
      <Navbar dark sticky="top">
      </Navbar>
      <SimulatorContainer />
    </div>
  );
}

export default App;
