import readlineSync from 'readline-sync';

const playerGreeting = () => {
  console.log('Welcome to the Brain games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};
export default playerGreeting;
