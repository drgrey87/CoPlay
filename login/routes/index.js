var express = require('express');
var router = express.Router();

// Simple middleware to ensure user is authenticated.
// Use this middleware on any resource that needs to be protected.
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
let ensureAuthenticated = (req, res, next) => {
  // if (req.isAuthenticated()) {
  //   // req.user is available for use here
  //   return next();
  // }

  // denied. redirect to login
  // res.redirect('/login')
  return next();
}

/* GET home page. */
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('index');
});

module.exports = router;