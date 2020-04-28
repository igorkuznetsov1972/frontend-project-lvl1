import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as dialog from '../src/index.js';
import isEven from '../src/isEven.js';

const playEvenGame = () => {
  const playerName = dialog.playerGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = _.random(1, 1000);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    const currentAnswer = readlineSync.question(`Question: ${num} `);
    if (expectedAnswer === currentAnswer && i === 2) {
      dialog.lastCorrectAnswer(playerName);
      break;
    }
    if (expectedAnswer === currentAnswer) dialog.correctAnswer();
    else if (currentAnswer === 'yes' || currentAnswer === 'no') {
      dialog.wrongAnswer(currentAnswer, expectedAnswer, playerName);
      break;
    } else {
      dialog.invalidAnswer(currentAnswer, playerName);
      break;
    }
  }
};
export default playEvenGame;
