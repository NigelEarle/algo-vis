// adjust for prod
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const express = require('express');
const config = require('./webpack.config');

const PORT = 3000;

const app = express();
const compiler = webpack(config);

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Listening on port: ${PORT}`);
});
