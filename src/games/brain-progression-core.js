import _ from 'lodash';
import gameFlow from '../index.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = (firstMember, difference) => {
  const progression = [];
  for (let position = 0; position < progressionLength; position += 1) {
    progression.push(firstMember + (position * difference));
  }
  return progression;
};
const getGameData = () => {
  const firstMember = _.random(1000);
  const difference = _.random(1000);
  const hiddenMemberPosition = _.random(0, progressionLength - 1);
  const progression = generateProgression(firstMember, difference);
  const expectedAnswer = progression.splice(hiddenMemberPosition, 1, '..').toString();
  const question = progression.join(' ');
  return { expectedAnswer, question };
};
const playProgressionGame = () => {
  gameFlow(gameDescription, getGameData);
};
export default playProgressionGame;
