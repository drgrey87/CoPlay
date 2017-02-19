var express = require('express');
var router = express.Router();

router.get('/vk', (req, res) => {
  res.render('index');
});

router.get('/vk/list', (req, res) => {
  let result;
  setTimeout(() => {
    result = [];
    res.send(result);
  }, 3000);
});

module.exports = router;