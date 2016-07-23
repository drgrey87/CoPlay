const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const request = require('request-promise');

const app = express();
const compiler = webpack(config);

let code;

let vk_requests = (options) => {
  return request(options);
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/list', (req, res) => {
  let url = 'https://oauth.vk.com/authorize?client_id=5221701&display=page&redirect_uri=http://127.0.0.1:3000/vk_code&scope=audio,offline&response_type=code&v=5.52';
  res.redirect(url);
});

app.get('/vk_code', (req, res) => {
  let options = {
    uri: `https://oauth.vk.com/access_token?client_id=5221701&client_secret=rT1T5bMFGX1OnYEkiQ3l&redirect_uri=http://127.0.0.1:3000/vk_code&code=${req.query.code}`,
    json: true
  };
  if (!code || req.query.code !== code) {
    code = req.query.code;
    vk_requests(options)
      .then((responce) => {
        options.uri = `https://api.vk.com/method/audio.get?count=100&access_token=${responce.access_token}&v=5.52`;
        return vk_requests(options);
      })
      .then((responce) => {
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.redirect('/');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
