import readlineSync from 'readline-sync';
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
  return {
    progression, hiddenNumber,
  };
};

const playProgressionGame = () => {
  const playerName = dialog.playerGreeting();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const {
      progression, hiddenNumber,
    } = generateProgression();
    const currentAnswer = readlineSync.questionInt(`Question: ${progression}  `);
    if (hiddenNumber === currentAnswer && i === 2) {
      dialog.lastCorrectAnswer(playerName);
      break;
    }
    if (hiddenNumber === currentAnswer) dialog.correctAnswer();
    else {
      dialog.wrongAnswer(currentAnswer, hiddenNumber, playerName);
      break;
    }
  }
};
export default playProgressionGame;
