import readlineSync from 'readline-sync';
import _ from 'lodash';
import * as dialog from '../index.js';
import isPrime from '../isPrime.js';

const playPrimeGame = () => {
  const playerName = dialog.playerGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = _.random(2, 4000);
    const expectedAnswer = isPrime(num) ? 'yes' : 'no';
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
export default playPrimeGame;
