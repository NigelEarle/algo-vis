module.exports = (data, res) => {
  res.setSseHeaders();
  for (let i = 0; i < data.length; i += 1) {
    ((i) => {
      setTimeout(() => {
        res.sseSend(data[i]);
      }, 1000 * i);
    })(i);
  }
};
