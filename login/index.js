const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleWare(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
}));

app.use(webpackHotMiddleWare(compiler));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(2000, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", 2000, 2000)
  }
});