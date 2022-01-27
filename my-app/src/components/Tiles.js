import { useEffect, useState } from 'react';
import Tile from './Tile';
import _ from 'lodash';
import {
  isSolved,
  swap as swapCards,
  canSwap,
  shuffle as shuffleCards,
} from '../helpers/util';

const tilesStyle = {
  listStyle: 'none',
  margin: '0 auto',
  padding: 5,
  position: 'relative',
};

const TilesHook = props => {
  const { rows, cols, width, height, hole} = props;
  const [numberState, setNumberState] = useState(_.range(0, rows * cols));
  const [isShuffled, setIsShuffled] = useState(false);
  const solved = isSolved(numberState);
  const pieceWidth = Math.round(width / cols);
  const pieceHeight = Math.round(height / rows);
  const style = {
    ...tilesStyle,
    width,
    height,
  };
  const isSuffledTemp = isShuffled;
  const handleTileClick = index => {
    swap(index);
  };

  const handleButtonClick = () => {
    setIsShuffled(true);
    shuffle();
    
  };

  const shuffle = () => {
    const numbers = numberState;
    const shuffledNumbers = shuffleCards(numbers, hole, rows, cols);
    setNumberState(shuffledNumbers);
    
  };

  const swap = tileIndex => {
    const numbers = numberState;
    const holeIndex = numbers.indexOf(hole);
    if (canSwap(tileIndex, holeIndex, rows, cols)) {
      const newNumbers = swapCards(numbers, tileIndex, holeIndex);
      setNumberState(newNumbers);
    }
  };

  return (
    <div>
      <ul style={style}>
        {numberState.map((number, index, solved) => (
          <Tile
            {...props}
            index={index}
            number={number}
            key={number}
            width={pieceWidth}
            height={pieceHeight}
            onClick={handleTileClick}
            solved={solved}
            isShuffled={isShuffled}
          />
        ))}
      </ul>
      <div className="over-button">
        <button className="rainbow-button" onClick={handleButtonClick}>
          {solved ? 'START!' : 'RESTART'}
        </button>
      </div>
    </div>
  );
};

export default TilesHook;
