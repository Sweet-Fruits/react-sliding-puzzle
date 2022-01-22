import { Component } from 'react';
import { Motion, spring } from 'react-motion';
import _ from 'lodash';
import globalGoals from './assets/global-goals.png';
import goal1 from './assets/goal1.png';
import goal2 from './assets/goal2.png';
import goal3 from './assets/goal3.png';
import goal4 from './assets/goal4.png';
import goal5 from './assets/goal5.png';
import goal6 from './assets/goal6.png';
import goal7 from './assets/goal7.png';
import goal8 from './assets/goal8.png';
import goal9 from './assets/goal9.png';
import goal10 from './assets/goal10.png';
import goal11 from './assets/goal11.png';
import goal12 from './assets/goal12.png';
import goal13 from './assets/goal13.png';
import goal14 from './assets/goal14.png';
import goal15 from './assets/goal15.png';
import goal16 from './assets/goal16.png';
import goal17 from './assets/goal17.png';
import './App.css';

const tilesStyle = {
  listStyle: 'none',
  margin: '0 auto',
  padding: 5,
  position: 'relative',
};

const tileStyle = {
  backgroundColor: 'grey',
  boxShadow: 'inset 0 0 1px 0 black',
  boxSizing: 'border-box',
  display: 'block',
  padding: 6,
  position: 'absolute',
};

const holeStyle = {
  opacity: 1,
};

const buttonStyle = {
  display: 'block',
  margin: '16px auto',
  padding: '8px 16px',
};

// Checks if the puzzle can be solved.
//
// Examples:
//   isSolvable([3, 7, 6, 0, 5, 1, 2, 4, 8], 3, 3) // => false
//   isSolvable([6, 4, 5, 0, 1, 2, 3, 7, 8], 3, 3) // => true
function isSolvable(numbers, rows, cols) {
  let product = 1;
  for (let i = 1, l = rows * cols - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (numbers[i - 1] - numbers[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
}

// Checks if the puzzle is solved.
//
// Examples:
//   isSolved([6, 4, 5, 0, 1, 2, 3, 7, 8]) // => false
//   isSolved([0, 1, 2, 3, 4, 5, 6, 7, 8]) // => true
function isSolved(numbers) {
  for (let i = 0, l = numbers.length; i < l; i++) {
    if (numbers[i] !== i) {
      return false;
    }
  }
  return true;
}

// Get the linear index from a row/col pair.
function getLinearPosition({ row, col }, rows, cols) {
  return parseInt(row, 10) * cols + parseInt(col, 10);
}

// Get the row/col pair from a linear index.
function getMatrixPosition(index, rows, cols) {
  return {
    row: Math.floor(index / cols),
    col: index % cols,
  };
}

function getVisualPosition({ row, col }, width, height) {
  return {
    x: col * width,
    y: row * height,
  };
}

function shuffle(numbers, hole, rows, cols) {
  do {
    numbers = _.shuffle(_.without(numbers, hole)).concat(hole);
  } while (isSolved(numbers) || !isSolvable(numbers, rows, cols));
  return numbers;
}

function canSwap(src, dest, rows, cols) {
  const { row: srcRow, col: srcCol } = getMatrixPosition(src, rows, cols);
  const { row: destRow, col: destCol } = getMatrixPosition(dest, rows, cols);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
}

function swap(numbers, src, dest) {
  numbers = _.clone(numbers);
  [numbers[src], numbers[dest]] = [numbers[dest], numbers[src]];
  return numbers;
}

class Tile extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index } = this.props;
    this.props.onClick(index);
  }

  render() {
    const { hole, number, index, rows, cols, width, height } = this.props;
    const matrixPos = getMatrixPosition(index, rows, cols);
    const visualPos = getVisualPosition(matrixPos, width, height);
    const motionStyle = {
      translateX: spring(visualPos.x),
      translateY: spring(visualPos.y),
    };
    const style = {
      ...tileStyle,
      ...(number === hole ? holeStyle : {}),
      width,
      height,
    };

    switch (number) {
      case 0:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal1})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 1:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal2})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 2:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal3})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 3:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal4})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 4:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal5})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 5:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal6})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 6:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal7})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 7:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal8})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 8:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal9})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 9:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal10})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 10:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal11})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 11:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal12})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 12:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal13})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 13:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal14})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 14:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal15})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 15:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal16})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 16:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${goal17})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      case 17:
        return (
          <Motion style={motionStyle}>
            {({ translateX, translateY }) => (
              <li
                style={{
                  ...style,
                  backgroundImage: `url(${globalGoals})`,
                  transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                }}
                onClick={this.handleClick}></li>
            )}
          </Motion>
        );
      default:
        return (
          <></>
        );
    }
  }
}

class Tiles extends Component {
  constructor(props) {
    super(props);

    const { rows, cols } = props;
    this.state = { numbers: _.range(0, rows * cols) };

    this.handleTileClick = this.handleTileClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleTileClick(index) {
    this.swap(index);
  }

  handleButtonClick() {
    this.shuffle();
  }

  shuffle() {
    const { hole, rows, cols } = this.props;
    const { numbers } = this.state;
    const shuffledNumbers = shuffle(numbers, hole, rows, cols);
    this.setState({ numbers: shuffledNumbers });
  }

  swap(tileIndex) {
    const { hole, rows, cols } = this.props;
    const { numbers } = this.state;
    const holeIndex = numbers.indexOf(hole);
    if (canSwap(tileIndex, holeIndex, rows, cols)) {
      const newNumbers = swap(numbers, tileIndex, holeIndex);
      this.setState({ numbers: newNumbers });
    }
  }

  render() {
    const { rows, cols, width, height } = this.props;
    const { numbers } = this.state;
    const solved = isSolved(numbers);
    const pieceWidth = Math.round(width / cols);
    const pieceHeight = Math.round(height / rows);
    const style = {
      ...tilesStyle,
      width,
      height,
    };

    return (
      <div>
        <ul style={style}>
          {numbers.map((number, index) => (
            <Tile
              {...this.props}
              index={index}
              number={number}
              key={number}
              width={pieceWidth}
              height={pieceHeight}
              onClick={this.handleTileClick}
            />
          ))}
        </ul>
        <button style={buttonStyle} onClick={this.handleButtonClick}>
          {solved ? 'Start' : 'Restart'}
        </button>
      </div>
    );
  }
}

class Puzzle extends Component {
  render() {
    return <Tiles rows={3} cols={6} hole={17} width={1200} height={600} />;
  }
}

export default Puzzle;
