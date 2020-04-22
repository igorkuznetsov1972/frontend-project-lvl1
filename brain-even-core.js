import readlineSync from 'readline-sync';
import _ from 'lodash';

const isEven = (num) => (num % 2 === 0);
const isRightAnswer = (num, answer) => {
  if (isEven(num) && answer === 'yes') return true;
  if (!isEven(num) && answer === 'no') return true;
  return false;
};
const numToPlayWith = () => _.random(1, 1000);
const answer = (num) => readlineSync.question(`Question: ${num} `);
const gamePlay = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = numToPlayWith();
    const currAnswer = answer(num);
    if (isRightAnswer(num, currAnswer)) console.log('Correct!');
    else if (currAnswer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".
Let's try again, ${playerName}!`);
      break;
    } else if (currAnswer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".
Let's try again, ${playerName}!`);
      break;
    }
  }
};
export default gamePlay;
