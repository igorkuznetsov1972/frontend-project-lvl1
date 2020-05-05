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
  expectedAnswer = String(expectedAnswer);
  return expectedAnswer;
};
const gameRules = 'What is the result of the expression ?';
const gameData = () => {
  const operators = ['+', '-', '*'];
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const chosenOperation = operators[_.random(2)];
  const expectedAnswer = doCalcOperation(firstNumber, secondNumber, chosenOperation);
  const question = ` ${firstNumber} ${chosenOperation} ${secondNumber} `;
  return { expectedAnswer, question };
};
const playCalcGame = () => {
  gameFlow(gameRules, gameData);
};
export default playCalcGame;
