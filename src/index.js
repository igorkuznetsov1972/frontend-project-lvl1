import readlineSync from 'readline-sync';

const gameFlow = (gameDescription, gameData) => {
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const { expectedAnswer, question } = gameData();
    const currentAnswer = readlineSync.question(`Question: ${question} `);
    if (expectedAnswer === currentAnswer) console.log('Correct!');
    else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}`);
};

export default gameFlow;
