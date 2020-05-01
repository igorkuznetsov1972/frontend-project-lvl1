import _ from 'lodash';
import * as dialog from '../index.js';

const isPrime = (num) => {
  const finish = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= finish; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const playPrimeGame = () => {
  const playerName = dialog.playerGreeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  const gameData = () => {
    const num = _.random(2, 4000);
    const expectedAnswer = isPrime(num) ? 'yes' : 'no';
    const currentAnswer = dialog.askQuestion(` ${num} `);
    return { expectedAnswer, currentAnswer };
  };
  dialog.gameFlow(playerName, gameData);
};
export default playPrimeGame;
