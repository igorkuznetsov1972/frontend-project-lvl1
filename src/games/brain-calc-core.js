import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'What is the result of the expression ?';
const operators = ['+', '-', '*'];
const doCalcOperation = (firstNumber, secondNumber, operation) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operation : '${operation}'!`);
  }
};
const getGameData = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const operation = operators[_.random(0, operators.length)];
  const expectedAnswer = (doCalcOperation(firstNumber, secondNumber, operation)).toString();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return { expectedAnswer, question };
};
const playCalcGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playCalcGame;
