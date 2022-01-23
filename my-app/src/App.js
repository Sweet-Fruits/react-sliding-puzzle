import './App.css';
import Puzzle from './Puzzle';
import logo from './assets/logo.png';

function App() {
  return (
    <div>
      <h1 id="title"><img className='imageTitle' src={logo} alt='loco'/>THE GLOBAL GOALS</h1>
      <h2 id="subtitle"> For Sustainable Development</h2>
      <Puzzle/>
    </div>
  );
}

export default App;
