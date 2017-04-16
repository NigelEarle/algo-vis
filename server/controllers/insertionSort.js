const timerRes = require('../utils/timer');

module.exports = (req, res) => {
  console.log('insertion sort hitt');
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  const data = [];
  for (let i = 0; i < array.length; i += 1) {
    const temp = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > temp; j -= 1) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;

    data.push(array.slice(0));
  }

  timerRes(data, res);
};
