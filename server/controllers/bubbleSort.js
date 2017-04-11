module.exports = (req, res) => {
  const array = [12, 34, 82, 98, 76, 53, 1, 49, 22, 61, 5];
  // stream/return array on every iteration until completion
  let swapped = true;
  while (swapped !== false) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        res.write(JSON.stringify(array));
        res.end();
      }
    }
  }
};
// first iteration - return array
// run while loop, go into for loop - return first iteration of array
// wait 1 second while next iteration completes sorted array
