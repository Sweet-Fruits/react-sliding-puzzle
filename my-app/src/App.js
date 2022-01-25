// import Puzzle from './Puzzle';
import PuzzleHook from './components/PuzzleHook';
import logo from './assets/logo.png';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 id="title">
        <img className="imageTitle" src={logo} alt="loco" />
        THE GLOBAL GOALS
      </h1>
      <h2 id="subtitle">For Sustainable Development</h2>
      <PuzzleHook />
    </div>
  );
};

export default App;
