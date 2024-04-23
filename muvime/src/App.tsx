import './App.css';
import { Header } from './components/Header/Header';
import { Introduction } from './components/Introduction/Introduction';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Introduction></Introduction>
      <Slider></Slider>
    </div>
  );
}

export default App;
