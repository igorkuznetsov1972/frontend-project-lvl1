import readlineSync from 'readline-sync';

const playerGreeting = () => {
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
const wrongAnswer = (currentAnswer, expectedAnswer, playerName) => {
  console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${playerName}!`);
};
const invalidAnswer = (currentAnswer, playerName) => {
  console.log(`"${currentAnswer}" is not a valid answer ;( \n
Let's try again, ${playerName}!`);
};
const correctAnswer = () => console.log('Correct!');
const lastCorrectAnswer = (playerName) => console.log(`Correct! \nCongratulations, ${playerName}`);

export {
  playerGreeting, wrongAnswer, correctAnswer, lastCorrectAnswer, invalidAnswer,
};
