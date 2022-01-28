import { useState } from 'react';
import { Motion, spring } from 'react-motion';
import {
  isSolved,
  getMatrixPosition,
  getVisualPosition,
} from '../helpers/util';
import Modal from 'react-modal';
import globalGoals from '../assets/global-goals.png';
import goal1 from '../assets/goal1.png';
import goal2 from '../assets/goal2.png';
import goal3 from '../assets/goal3.png';
import goal4 from '../assets/goal4.png';
import goal5 from '../assets/goal5.png';
import goal6 from '../assets/goal6.png';
import goal7 from '../assets/goal7.png';
import goal8 from '../assets/goal8.png';
import goal9 from '../assets/goal9.png';
import goal10 from '../assets/goal10.png';
import goal11 from '../assets/goal11.png';
import goal12 from '../assets/goal12.png';
import goal13 from '../assets/goal13.png';
import goal14 from '../assets/goal14.png';
import goal15 from '../assets/goal15.png';
import goal16 from '../assets/goal16.png';
import goal17 from '../assets/goal17.png';
import win1 from '../assets/win1.jpg';
import win2 from '../assets/win2.jpg';
import win3 from '../assets/win3.jpg';
// import win4 from '../assets/win4.jpg';
import win5 from '../assets/win5.jpg';
import win6 from '../assets/win6.jpg';
import win7 from '../assets/win7.jpg';
import win8 from '../assets/win8.jpg';
import win9 from '../assets/win9.jpg';
import win10 from '../assets/win10.jpg';
import win11 from '../assets/win11.jpg';
import win12 from '../assets/win12.jpg';
import win13 from '../assets/win13.jpg';
import win14 from '../assets/win14.png';
import win15 from '../assets/win15.jpg';
import win16 from '../assets/win16.png';
import win17 from '../assets/win17.jpg';

const goals = [
  goal1,
  goal2,
  goal3,
  goal4,
  goal5,
  goal6,
  goal7,
  goal8,
  goal9,
  goal10,
  goal11,
  goal12,
  goal13,
  goal14,
  goal15,
  goal16,
  goal17,
  globalGoals,
];

const wins = [
  win1,
  win2,
  win3,
  win3,
  win5,
  win6,
  win7,
  win8,
  win9,
  win10,
  win11,
  win12,
  win13,
  win14,
  win15,
  win16,
  win17,
];

const tileStyle = {
  backgroundColor: 'grey',
  boxShadow: 'inset 0 0 1px 0 black',
  boxSizing: 'border-box',
  display: 'block',
  padding: 6,
  position: 'absolute',
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const holeStyle = {
  opacity: 1,
};

const images = {
  width: 1066,
  height: 600,
};

const Card = ({
  index,
  solved,
  onClick,
  isShuffled,
  rows,
  cols,
  width,
  height,
  number,
  hole,
}) => {
  const [modal, setModal] = useState(false);

  const matrixPos = getMatrixPosition(index, rows, cols);
  const visualPos = getVisualPosition(matrixPos, width, height);

  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const handleClick = () => {
    onClick(index);
    if (isSolved(solved) && isShuffled) {
      openModal();
    }
  };

  const style = {
    ...tileStyle,
    ...(number === hole ? holeStyle : {}),
    width,
    height,
  };

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          style={{
            ...style,
            backgroundImage: `url(${goals[number]})`,
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          }}
          onClick={handleClick}>
          {number === 17 ? null : (
            <Modal
              isOpen={modal}
              onRequestClose={closeModal}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal">
              <img
                alt="global-goal"
                style={images}
                src={wins[number]}
                onClick={closeModal}
              />
            </Modal>
          )}
        </li>
      )}
    </Motion>
  );
};

export default Card;
