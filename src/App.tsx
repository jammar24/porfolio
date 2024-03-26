import React from 'react';
import Home from './Home';
import './App.css';
import HomeContent from './Pages/HomeContent';
import HomeLinks from './Pages/HomeLinks';

function App() {
  return (
    <div className="App">
      <Home/>
      <HomeLinks/>
    </div>
  );
}

export default App;
