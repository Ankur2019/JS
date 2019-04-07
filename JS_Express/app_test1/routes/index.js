var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express.js' });
// });


router.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there, Welcome to Express.js!' })
})


module.exports = router;
