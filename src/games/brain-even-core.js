import _ from 'lodash';
import gameFlow from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameData = () => {
  const num = _.random(1, 1000);
  const expectedAnswer = isEven(num) ? 'yes' : 'no';
  const question = ` ${num} `;
  return { expectedAnswer, question };
};
const playEvenGame = () => {
  gameFlow(gameRules, gameData);
};
export default playEvenGame;
