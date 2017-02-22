var express = require('express');
var router = express.Router();
const passport = require('passport');
var authenticationMiddleware = require('../login/middleware');

/* GET home page. */
router.get('/', authenticationMiddleware(), (req, res) => {
  res.render('index', {
    username: req.user.username
  })
})

module.exports = router;
