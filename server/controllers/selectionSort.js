const timerRes = require('../utils/timer');

module.exports = (req, res) => {
  console.log('selection sort hitt');
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  const data = [];
  for (let i = 0; i < array.length; i += 1) {
    let smallest = i;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    if (smallest !== i) {
      const temp = array[i];
      array[i] = array[smallest];
      array[smallest] = temp;
      data.push(array.slice(0));
    }
  }

  timerRes(data, res);
};
