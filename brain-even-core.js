import readlineSync from 'readline-sync';
import _ from 'lodash';

const playEvenGame = () => {
  const isEven = (num) => (num % 2 === 0);
  const isRightAnswer = (num, answer) => {
    if (isEven(num) && answer === 'yes') return true;
    if (!isEven(num) && answer === 'no') return true;
    return false;
  };
  /* const numToPlayWith = _.random(1, 1000); */
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = _.random(1, 1000);
    const currAnswer = readlineSync.question(`Question: ${num} `);
    if (isRightAnswer(num, currAnswer) && i === 2) console.log(`Correct! \nCongratulations, ${playerName}`);
    if (isRightAnswer(num, currAnswer)) console.log('Correct!');
    else if (currAnswer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".
Let's try again, ${playerName}!`);
      break;
    } else if (currAnswer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".
Let's try again, ${playerName}!`);
      break;
    } else {
      console.log(`"${currAnswer}" is not an answer ;( \n
Let's try again, ${playerName}!`);
      break;
    }
  }
};
export default playEvenGame;
