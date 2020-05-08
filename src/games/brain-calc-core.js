import _ from 'lodash';
import gameFlow from '../index.js';

const doCalcOperation = (firstNumber, secondNumber, chosenOperation) => {
  let expectedAnswer;
  switch (chosenOperation) {
    case '+':
      expectedAnswer = firstNumber + secondNumber;
      break;
    case '-':
      expectedAnswer = firstNumber - secondNumber;
      break;
    case '*':
      expectedAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return expectedAnswer;
};
const gameDescription = 'What is the result of the expression ?';
const getGameData = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const chosenOperation = operators[_.random(2)];
  const expectedAnswer = (doCalcOperation(firstNumber, secondNumber, chosenOperation)).toString();
  const question = `${firstNumber} ${chosenOperation} ${secondNumber}`;
  return { expectedAnswer, question };
};
const playCalcGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playCalcGame;
