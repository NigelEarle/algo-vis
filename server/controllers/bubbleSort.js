const timerRes = require('../utils/timer');

module.exports = (req, res, next) => {
  console.log('bubble sort hitt');
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  let swapped = true;
  const data = [];
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        data.push(array.slice(0));
      }
    }
  }

  timerRes(data, res);
};
