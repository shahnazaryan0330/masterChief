import './App.css';
import TrafficLight from './components/TrafficLight/TrafficLight';
import Move from './components/Move/Move';
import DarkLightMode from './components/DarkLightMode/DarkLightMode';
import Block from './components/Block/Block';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <TrafficLight/>
      <Move/>
      <DarkLightMode/>
      <Block/>
      <Game/>
    </div>
  );
}

export default App;
