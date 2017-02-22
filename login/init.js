const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const config = require('../config/config');

const user = {
  username: 'test-user',
  password: 'test-password',
  id: 1
}

function findUser (username, callback) {
  if (username === user.username) {
    return callback(null, user)
  }
  return callback(null)
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete VK profile is serialized
//   and deserialized.
passport.serializeUser(function (user, cb) {
  cb(null, user.username)
})

passport.deserializeUser(function (username, cb) {
  findUser(username, cb)
})

function initPassport () {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      findUser(username, function (err, user) {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false)
        }
        if (password !== user.password  ) {
          return done(null, false)
        }
        return done(null, user)
      })
    }
  ))

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
}

module.exports = initPassport
