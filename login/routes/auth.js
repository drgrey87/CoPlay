var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/vk', passport.authenticate('vkontakte', { display: 'page', scope: ['audio'] }),
  function(req, res) {
    // The request will be redirected to VK for authentication, so this
    // function will not be called.
  }
);

router.get('/auth/vkontakte/callback', passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/vk');
  }
);

router.get('/auth/facebook',
  passport.authenticate('facebook')
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('succes auth');
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;