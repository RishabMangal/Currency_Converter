import React from 'react';
import Flags from './Flags';
import './bootstrap.min.css';
import './App.css';
import Header from './Header';
import Converter from './Converter';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Flags></Flags>
      <Converter></Converter>
    </div>
  );
}

export default App;
