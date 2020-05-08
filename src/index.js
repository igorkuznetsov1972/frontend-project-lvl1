import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const gameFlow = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  for (let roundNumber = 0; roundNumber < numberOfRounds; roundNumber += 1) {
    const { expectedAnswer, question } = getGameData();
    console.log(`Question: ${question} `);
    const currentAnswer = readlineSync.question('Your answer:');
    if (expectedAnswer !== currentAnswer) {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}`);
};

export default gameFlow;
