// adjust for prod
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const routes = require('./server/routes/sorting');
const config = require('./webpack.config');
const sse = require('./server/utils/sse');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = 3000;

const app = express();
const compiler = webpack(config);

app.use(sse);
app.use('/api', routes);

if (isDev) {
  /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'src', 'index.ejs')));
}

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Listening on port: ${PORT}`);
});
