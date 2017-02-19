const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const webpack = require('webpack');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev');
const request = require('request-promise');

const app = express();
const compiler = webpack(webpackConfig);

var index = require('./routes/index');
var vk = require('./routes/vk');

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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

app.use('/', index);
app.use('/vk', vk);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, 'localhost', (err) => {
  console.log('Listening at http://localhost:3000');
  if (err) {
    console.log(err);
    return;
  }
});

module.exports = app;