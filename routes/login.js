var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('login');
});
console.log(11111111111);
router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

module.exports = router;