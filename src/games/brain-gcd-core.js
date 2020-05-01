import _ from 'lodash';
/* import findGcd from '../findGcd.js'; */
import * as dialog from '../index.js';

const findGcd = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  const expectedAnswer = String(a + b);
  return {
    expectedAnswer, firstNumber, secondNumber,
  };
};
const playGcdGame = () => {
  const playerName = dialog.playerGreeting('Find the greatest common divisor of given numbers.');
  const gameData = () => {
    const {
      expectedAnswer, firstNumber, secondNumber,
    } = findGcd();
    const currentAnswer = dialog.askQuestion(` ${firstNumber} ${secondNumber} `);
    return { expectedAnswer, currentAnswer };
  };
  dialog.gameFlow(playerName, gameData);
};
export default playGcdGame;
