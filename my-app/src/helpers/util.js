import _ from 'lodash';

// Checks if the puzzle can be solved.
export const isSolvable = (numbers, rows, cols) => {
  let product = 1;
  for (let i = 1, l = rows * cols - 1; i <= l; i++) {
    for (let j = i + 1, m = l + 1; j <= m; j++) {
      product *= (numbers[i - 1] - numbers[j - 1]) / (i - j);
    }
  }
  return Math.round(product) === 1;
};

// Checks if the puzzle is solved.
export const isSolved = numbers => {
  for (let i = 0, l = numbers.length; i < l; i++) {
    if (numbers[i] !== i) {
      return false;
    }
  }
  return true;
};

// Get the linear index from a row/col pair.
export const getLinearPosition = ({ row, col }, rows, cols) => {
  return parseInt(row, 10) * cols + parseInt(col, 10);
};

// Get the row/col pair from a linear index.
export const getMatrixPosition = (index, rows, cols) => {
  return {
    row: Math.floor(index / cols),
    col: index % cols,
  };
};

export const getVisualPosition = ({ row, col }, width, height) => {
  return {
    x: col * width,
    y: row * height,
  };
};

export const shuffle = (numbers, hole, rows, cols) => {
  do {
    numbers = _.shuffle(_.without(numbers, hole)).concat(hole);
  } while (isSolved(numbers) || !isSolvable(numbers, rows, cols));
  return numbers;
};

export const canSwap = (src, dest, rows, cols) => {
  const { row: srcRow, col: srcCol } = getMatrixPosition(src, rows, cols);
  const { row: destRow, col: destCol } = getMatrixPosition(dest, rows, cols);
  return Math.abs(srcRow - destRow) + Math.abs(srcCol - destCol) === 1;
};

export const swap = (numbers, src, dest) => {
  numbers = _.clone(numbers);
  [numbers[src], numbers[dest]] = [numbers[dest], numbers[src]];
  return numbers;
};
