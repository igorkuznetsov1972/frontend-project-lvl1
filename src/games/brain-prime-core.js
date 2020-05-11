import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) return false;
  const maxDivisor = Math.sqrt(num);
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) return false;
  }
  return true;
};
const getGameData = () => {
  const num = _.random(2, 4000);
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  const question = String(num);
  return { expectedAnswer, question };
};
const playPrimeGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playPrimeGame;
