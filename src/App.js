import React from 'react';

import './App.css';
import routes from './routes';
import Header from './Components/Header/Header';
import Joke from './Components/Joke/Joke';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      { routes }
      </div>
      <Joke />
    </div>
  );
}

export default App;
