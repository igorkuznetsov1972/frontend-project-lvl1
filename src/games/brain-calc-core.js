import _ from 'lodash';
import * as dialog from '../index.js';

const doCalcOperation = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  const operation = _.random(2);
  let expectedAnswer; let operator;
  switch (operation) {
    case 0:
      expectedAnswer = firstNumber + secondNumber;
      operator = '+';
      break;
    case 1:
      expectedAnswer = firstNumber - secondNumber;
      operator = '-';
      break;
    case 2:
      expectedAnswer = firstNumber * secondNumber;
      operator = '*';
      break;
    default:
      break;
  }
  expectedAnswer = String(expectedAnswer);
  return {
    expectedAnswer, operator, firstNumber, secondNumber,
  };
};

const playCalcGame = () => {
  const playerName = dialog.playerGreeting('What is the expectedAnswer of the expression ?');
  const gameData = () => {
    const {
      expectedAnswer, operator, firstNumber, secondNumber,
    } = doCalcOperation();
    const currentAnswer = dialog.askQuestion(` ${firstNumber} ${operator} ${secondNumber} `);
    return { expectedAnswer, currentAnswer };
  };
  dialog.gameFlow(playerName, gameData);
};
export default playCalcGame;
