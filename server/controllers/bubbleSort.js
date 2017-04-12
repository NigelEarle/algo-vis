module.exports = (req, res) => {
  res.setSseHeaders(); // set headers

  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  let iterNum = 0;
  let idx = 0;

  (function iteration() {
    if (idx >= array.length - iterNum) {
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
      setTimeout(iteration, 1000);
    } else {
      res.end();
    }
  }());
};
