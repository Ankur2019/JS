var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  // next(); // useful in the future if you want to add multiple route handlers to the '/' route path
});

router.get('/cool', function (req, res, next) {
  res.send('You\'re so cool');
})

module.exports = router;
