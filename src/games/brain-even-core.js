import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getGameData = () => {
  const num = _.random(1, 1000);
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  const question = String(num);
  return { expectedAnswer, question };
};
const playEvenGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playEvenGame;
