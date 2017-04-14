const redis = require('redis');
module.exports = (req, res) => {
  console.log('bubble sort hitt');
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }

  // (function iteration() {
  //   if (idx >= array.length - iterNum - 1) {
  //     idx = 0;
  //     iterNum += 1;
  //   }
  //   if (iterNum < array.length) {
  //     if (array[idx] > array[idx + 1]) {
  //       const temp = array[idx];
  //       array[idx] = array[idx + 1];
  //       array[idx + 1] = temp;
  //       res.sseSend(array);
  //     }
  //     idx += 1;
  //     setTimeout(iteration, 500);
  //   } else {
  //     res.end();
  //   }
  // }());
};
