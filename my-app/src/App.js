import Puzzle from './components/Puzzle';
import logo from './assets/logo.png';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <h1 id="title">
        <img className="imageTitle" src={logo} alt="loco" />
        THE GLOBAL GOALS
      </h1>
      <h2 id="subtitle">For Sustainable Development</h2>
      <Puzzle />
    </div>
  );
};

export default App;
