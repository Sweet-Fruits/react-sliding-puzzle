import Tiles from './components/Tiles';
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
      <Tiles rows={3} cols={6} hole={17} width={1200} height={600} />;
    </div>
  );
};

export default App;
