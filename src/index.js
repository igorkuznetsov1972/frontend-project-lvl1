import readlineSync from 'readline-sync';

const playerGreeting = (gameRules) => {
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameRules);
  return playerName;
};
const askQuestion = (question) => readlineSync.question(`Question: ${question} `);
const gameFlow = (playerName, gameData) => {
  for (let i = 0; i < 3; i += 1) {
    const { expectedAnswer, currentAnswer } = gameData();
    if (expectedAnswer === currentAnswer && i === 2) {
      console.log(`Correct! \nCongratulations, ${playerName}`);
      break;
    }
    if (expectedAnswer === currentAnswer) console.log('Correct!');
    else {
      console.log(`${currentAnswer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${playerName}!`);
      break;
    }
  }
};

export {
  playerGreeting, askQuestion, gameFlow,
};
