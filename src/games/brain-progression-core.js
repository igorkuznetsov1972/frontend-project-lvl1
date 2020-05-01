import _ from 'lodash';
import * as dialog from '../index.js';

const generateProgression = () => {
  const firstNumber = _.random(1000);
  const incrementNumber = _.random(1000);
  const hiddenNumberPosition = _.random(9);
  let hiddenNumber;
  const progression = [];
  if (hiddenNumberPosition === 0) {
    progression.push('..');
    hiddenNumber = firstNumber;
  } else progression.push(firstNumber);
  let nextNumber = firstNumber;
  for (let i = 1; i < 10; i += 1) {
    nextNumber += incrementNumber;
    if (i === hiddenNumberPosition) {
      progression.push('..');
      hiddenNumber = nextNumber;
    } else progression.push(nextNumber);
  }
  const expectedAnswer = String(hiddenNumber);
  return {
    progression, expectedAnswer,
  };
};

const playProgressionGame = () => {
  const playerName = dialog.playerGreeting('What number is missing in the progression?');
  const gameData = () => {
    const {
      progression, expectedAnswer,
    } = generateProgression();
    const currentAnswer = dialog.askQuestion(` ${progression}  `);
    return { expectedAnswer, currentAnswer };
  };
  dialog.gameFlow(playerName, gameData);
};
export default playProgressionGame;
