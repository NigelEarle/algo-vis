module.exports = (req, res) => {
  console.log('hitt');
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  let iterNum = 0;
  let idx = 0;

  res.setSseHeaders(); // set event/stream headers

  (function iteration() {
    if (idx >= array.length - iterNum - 1) {
      idx = 0;
      iterNum += 1;
    }
    if (iterNum < array.length) {
      if (array[idx] > array[idx + 1]) {
        const temp = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = temp;
        res.sseSend(array);
      }
      idx += 1;
      setTimeout(iteration, 500);
    } else {
      res.end();
    }
  }());
};
