import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as dialog from '../src/index.js';

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
  return {
    expectedAnswer, operator, firstNumber, secondNumber,
  };
};

const playCalcGame = () => {
  const playerName = dialog.playerGreeting();
  console.log('What is the expectedAnswer of the expression ?');
  for (let i = 0; i < 3; i += 1) {
    const { expectedAnswer, operator, firstNumber, secondNumber } = doCalcOperation();
    const currentAnswer = readlineSync.questionInt(`Question: ${firstNumber} ${operator} ${secondNumber} `);
    if (expectedAnswer === currentAnswer && i === 2) {
      dialog.lastCorrectAnswer(playerName);
      break;
    }
    if (expectedAnswer === currentAnswer) dialog.correctAnswer();
    else {
      dialog.wrongAnswer(currentAnswer, expectedAnswer, playerName);
      break;
    }
  }
};
export default playCalcGame;
