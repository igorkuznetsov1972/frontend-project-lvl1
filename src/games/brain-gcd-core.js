import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const findGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) return firstNumber;
  return findGcd(secondNumber, firstNumber % secondNumber);
};
const getGameData = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const expectedAnswer = findGcd(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;
  return { expectedAnswer, question };
};
const playGcdGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playGcdGame;
