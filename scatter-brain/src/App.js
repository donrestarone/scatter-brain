import React from 'react';
import {getRandomFact} from './Services/getRandomFact'
import './App.css';

function App() {
  console.log(getRandomFact().then(response => response.json()).then(object => console.log(object)))
  return (
    <div className="App">

    </div>
  );
}

export default App;
