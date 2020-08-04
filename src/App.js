import React from 'react';
import './App.css';
import Game from './components/game/Game';
import DragonPick from './assets/images/Dragon.jpg';
import Freedom from './assets/images/Freedom.gif';
import Bananas from './assets/images/Bananas.jpg';
import Peanuts from './assets/images/Peanuts.jpg';

function App(props) {
  const dragon = {
      name: 'Dragon',
      logoSrc: DragonPick
  }
  const freedom = {
      name: 'Freedom',
      logoSrc: Freedom
  }
  const peanuts = {
      name: 'Peanuts',
      logoSrc: Peanuts
  }
  const bananas = {
      name: 'Bananas',
      logoSrc: Bananas
  }
  return (
    <div className="App">
          <Game 
          venue="The Playground"
          homeTeam={dragon}
          visitingTeam={freedom} 
          />
          <Game 
          venue="Keenesburg" 
          homeTeam={peanuts}
          visitingTeam={bananas}/>            
    </div>
  )
}

export default App;
