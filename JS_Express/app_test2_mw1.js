var express = require('express')
var router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time in mw1:', Date.now())
  next()
})



router.use(function (req, res, next) {
    
    req.headers['x-auth'] = 1; // if 0 or undefined, doesn't work

    console.log('In x-auth = ' + req.headers['x-auth']);
    if (!req.headers['x-auth']) return next('router')
    next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})


router.get('/', function (req, res) {
    res.send('hello, user!')
})


// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page, gives error
//   res.render('regular')

  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/:id', function (req, res, next) {
  console.log(req.params.id)
  res.send('special')
})

module.exports = router
