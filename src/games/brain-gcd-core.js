import readlineSync from 'readline-sync';
import findGcd from '../findGcd.js';
import * as dialog from '../index.js';

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
