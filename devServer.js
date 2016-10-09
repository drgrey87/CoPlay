const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const request = require('request-promise');

const app = express();
const compiler = webpack(config);
const VK = require('vksdk');
const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
let vkList;
let code;

let requests = (options) => {
  return request(options);
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use((req, res, next) => {
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'https://oauth.vk.com/', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});


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


passport.use(new VKontakteStrategy(
  {
    clientID:     5660240, // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
    clientSecret: 'Zp1MTLEbRtEBUkexjZH7',
    callbackURL:  "http://localhost:3000/auth/vkontakte/callback",
    scope: ['audio'],
    profileFields: ['audio'],
  },
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
      .then((response) => {console.log('responce.items', response.response.items);
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

app.get('/vk/auth', passport.authenticate('vkontakte', { display: 'page', scope: ['audio'] }),
  function(req, res) {
    // The request will be redirected to VK for authentication, so this
    // function will not be called.
  }
);

app.get('/auth/vkontakte/callback', passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/vk');
  }
);

//second variant

// app.get('/vk/auth', (req, res) => {
//   let url = 'https://oauth.vk.com/authorize?client_id=5660240&display=page&redirect_uri=http://localhost:3000/auth/vkontakte/callback&scope=audio,offline&response_type=code&v=5.52';
//   res.redirect(url);
// });

// app.get('/auth/vkontakte/callback', (req, res) => {
//   console.log('req.quey', req.query);
//   console.log('req.body', req.body);
//   let options = {
//     uri: `https://oauth.vk.com/access_token?client_id=5660240&client_secret=Zp1MTLEbRtEBUkexjZH7&redirect_uri=http://localhost:3000/auth/vkontakte/callback&code=${req.query.code}`,
//     json: true
//   };
//   if (!code || req.query.code !== code) {
//     code = req.query.code;
//     requests(options)
//       .then((responce) => {
//         options.uri = `https://api.vk.com/method/audio.get?count=100&access_token=${responce.access_token}&v=5.52`;
//         return requests(options);
//       })
//       .then((responce) => {console.log('resp1', responce);
//         res.redirect('/vk');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   } else {
//     requests(options)
//       .then((responce) => {
//         options.uri = `https://api.vk.com/method/audio.get?count=100&access_token=${responce.access_token}&v=5.52`;
//         return requests(options);
//       })
//       .then((responce) => {console.log('resp2', responce);
//         res.redirect('/vk');
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/vk', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/vk/list', (req, res) => {
  let result;
  setTimeout(() => {
    result = vkList || [];
    res.send(result);
  }, 3000);
});

app.listen(3000, 'localhost', (err) => {
  console.log('Listening at http://localhost:3000');
  if (err) {
    console.log(err);
    return;
  }
});
