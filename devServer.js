const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const webpack = require('webpack');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev');
const request = require('request-promise');
const config = require('./config/config');

const app = express();
const compiler = webpack(webpackConfig);

const passport = require('passport');

const session = require('express-session');
const RedisStore = require('connect-redis')(session);
//need to be in top before require routes
require('./login/init')(app);

var index = require('./routes/index');
var auth = require('./routes/auth');
var login = require('./routes/login');

app.set('views', './views');
app.set('view engine', 'pug');

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

app.use(session({
  store: new RedisStore(config.redisStore.store),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/auth', auth);
app.use('/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('err', err);
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.log('aaaaa', err);
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