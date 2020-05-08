import _ from 'lodash';
import gameFlow from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  const finish = Math.sqrt(num);
  for (let i = 2; i <= finish; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const num = _.random(2, 4000);
  const expectedAnswer = isPrime(num) ? 'yes' : 'no';
  const question = num;
  return { expectedAnswer, question };
};
const playPrimeGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playPrimeGame;
