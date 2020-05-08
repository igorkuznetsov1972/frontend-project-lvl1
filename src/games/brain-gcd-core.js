import _ from 'lodash';
import gameFlow from '../index.js';

const findGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  const expectedAnswer = String(a + b);
  return expectedAnswer;
};
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const expectedAnswer = findGcd(firstNumber, secondNumber);
  const question = ` ${firstNumber} ${secondNumber} `;
  return { expectedAnswer, question };
};
const playGcdGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playGcdGame;
