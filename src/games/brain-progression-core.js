import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (firstNumber, incrementNumber, hiddenNumberPosition) => {
  let hiddenNumber;
  const progression = [];
  if (hiddenNumberPosition === 0) {
    progression.push('..');
    hiddenNumber = firstNumber;
  } else progression.push(firstNumber);
  let nextNumber = firstNumber;
  for (let position = 1; position < progressionLength; position += 1) {
    nextNumber += incrementNumber;
    if (position === hiddenNumberPosition) {
      progression.push('..');
      hiddenNumber = nextNumber;
    } else progression.push(nextNumber);
  }
  return {
    progression, hiddenNumber,
  };
};
const getGameData = () => {
  const firstNumber = _.random(1000);
  const incrementNumber = _.random(1000);
  const hiddenNumberPosition = _.random(0, progressionLength);
  const {
    progression, hiddenNumber,
  } = generateProgression(firstNumber, incrementNumber, hiddenNumberPosition);
  const question = progression;
  const expectedAnswer = hiddenNumber.toString();
  return { expectedAnswer, question };
};
const playProgressionGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playProgressionGame;
