module.exports = (req, res, next) => {
  res.setSseHeaders = () => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });
  };

  res.sseSend = (data) => {
    res.write(JSON.stringify(data));
  };

  next();
};
