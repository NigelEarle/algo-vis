const timerRes = require('../utils/timer');

module.exports = (req, res) => {
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];

  const pivot = array[0];
  const left = [];
  const right = [];

  let partition = true;

  const interimResult = [];
  do {
    partition = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    interimResult.push(left.concat(right));
  } while (partition);
};
