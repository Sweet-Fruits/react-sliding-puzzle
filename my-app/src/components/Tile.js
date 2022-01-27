import { useState } from 'react';
import {
  isSolved,
  getMatrixPosition,
  getVisualPosition,
} from '../helpers/util';
import { Motion, spring } from 'react-motion';
import React from 'react';
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

// Modal.setAppElement('#yourAppElement');

const holeStyle = {
  opacity: 1,
};

const images = {
  width: 1066,
  height: 600,
};

const Tile = props => {
  let subtitle;
  const [modal, setModal] = useState(false);
  
  console.log(props.isShuffled);


  // if (isSolved(props.solved)) {
  //   props.hasSolved = true;
  // }

  const openModal = () => {
    setModal(!modal);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const handleClick = () => {
    const { index, solved } = props;
    props.onClick(index);
    if (isSolved(solved) && props.isShuffled) {
      openModal();
    }
  };

  // Solved is true when mounting
  const { hole, number, index, rows, cols, width, height } = props;
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win1}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win2}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win3}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win3}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win5}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win6}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win7}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win8}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win9}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win10}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win11}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win12}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win13}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win14}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win15}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win16}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}>
              <Modal
                isOpen={modal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <img
                  alt="global-goal"
                  style={images}
                  src={win17}
                  onClick={closeModal}
                />
              </Modal>
            </li>
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
              onClick={handleClick}></li>
          )}
        </Motion>
      );
    default:
      return <></>;
  }
};

export default Tile;
