const favicon = require('serve-favicon');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const config = require('././config');
const webpackHotMiddleWare = require('webpack-hot-middleware');
const webpackDevMiddleWare = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(webpackConfig);

const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const session = require('express-session');
const RedisStore = require('connect-redis')(session);

var index = require('./routes');
var auth = require('./routes/auth');

app.set('views', './views');
app.set('view engine', 'jade');

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

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete VK profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new VKontakteStrategy(config.startegies.VK,
  function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {

    process.nextTick(function () {
      // To keep the example simple, the user's VK profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the VK account with a user record in your database,
      // and return that user instead.
      request({
        uri: `https://api.vk.com/method/audio.get?count=100&access_token=${params.access_token}&v=5.57`,
        json: true
      })
        .then((response) => {
          vkList = response.response.items;
          done(null, profile);
        })
        .catch((err) => {
          console.log(err);
        });

      // return
    });
  }
));
passport.use(new FacebookStrategy(config.startegies.FB,
  function(accessToken, refreshToken, profile, cb) {console.log('profile', profile);
    return cb(null, profile);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));

app.use('/', index);
app.use('/auth', auth);

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

module.exports = app;