import _ from 'lodash';
import gameFlow from '../index.js';

const generateProgression = (firstNumber, incrementNumber, hiddenNumberPosition) => {
  let hiddenNumber;
  const progression = [];
  if (hiddenNumberPosition === 0) {
    progression.push('..');
    hiddenNumber = firstNumber;
  } else progression.push(firstNumber);
  const progressionLength = 10;
  let nextNumber = firstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    nextNumber += incrementNumber;
    if (i === hiddenNumberPosition) {
      progression.push('..');
      hiddenNumber = nextNumber;
    } else progression.push(nextNumber);
  }
  const expectedAnswer = String(hiddenNumber);
  return {
    progression, expectedAnswer,
  };
};
const gameRules = 'What number is missing in the progression?';
const gameData = () => {
  const firstNumber = _.random(1000);
  const incrementNumber = _.random(1000);
  const hiddenNumberPosition = _.random(9);
  const {
    progression, expectedAnswer,
  } = generateProgression(firstNumber, incrementNumber, hiddenNumberPosition);
  const question = ` ${progression}  `;
  return { expectedAnswer, question };
};
const playProgressionGame = () => {
  gameFlow(gameRules, gameData);
};
export default playProgressionGame;
