import Card from './Card';

const Tile = ({
  hole,
  number,
  index,
  solved,
  rows,
  cols,
  width,
  height,
  onClick,
  isShuffled,
}) => {
  if (typeof number !== 'undefined') {
    return (
      <Card
        index={index}
        solved={solved}
        onClick={onClick}
        isShuffled={isShuffled}
        rows={rows}
        cols={cols}
        width={width}
        height={height}
        number={number}
        hole={hole}
      />
    );
  } else {
    return <></>;
  }
};

export default Tile;
