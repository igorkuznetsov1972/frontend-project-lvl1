import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as dialog from '../src/index.js';

const findGcd = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  const expectedAnswer = a + b;
  return {
    expectedAnswer, firstNumber, secondNumber,
  };
};

const playGcdGame = () => {
  const playerName = dialog.playerGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const {
      expectedAnswer, firstNumber, secondNumber,
    } = findGcd();
    const currentAnswer = readlineSync.questionInt(`Question: ${firstNumber} ${secondNumber} `);
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
export default playGcdGame;
