import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (firstNumber, difference) => {
  const progression = [firstNumber];
  for (let position = 1; position < progressionLength; position += 1) {
    progression.push(firstNumber + (position * difference));
  }
  return progression;
};
const getGameData = () => {
  const firstNumber = _.random(1000);
  const difference = _.random(1000);
  const hiddenNumberPosition = _.random(0, progressionLength - 1);
  const progression = generateProgression(firstNumber, difference);
  const expectedAnswer = progression[hiddenNumberPosition].toString();
  progression.splice(hiddenNumberPosition, 1, '..');
  const question = progression.join(' ');
  return { expectedAnswer, question };
};
const playProgressionGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playProgressionGame;
