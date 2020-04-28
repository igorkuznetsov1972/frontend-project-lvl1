const isPrime = (num) => {
  const finish = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= finish; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
export default isPrime;
