import _ from 'lodash';
import * as dialog from '../index.js';

const isEven = (num) => num % 2 === 0;
const playEvenGame = () => {
  const playerName = dialog.playerGreeting('Answer "yes" if the number is even, otherwise answer "no".');
  const gameData = () => {
    const num = _.random(1, 1000);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    const currentAnswer = dialog.askQuestion(` ${num} `);
    return { expectedAnswer, currentAnswer };
  };
  dialog.gameFlow(playerName, gameData);
};
export default playEvenGame;
