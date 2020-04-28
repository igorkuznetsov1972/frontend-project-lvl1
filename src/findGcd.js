import _ from 'lodash';

const findGcd = () => {
  const firstNumber = _.random(1000);
  const secondNumber = _.random(1000);
  let a = firstNumber;
  let b = secondNumber;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  const expectedAnswer = a + b;
  return {
    expectedAnswer, firstNumber, secondNumber,
  };
};
export default findGcd;
