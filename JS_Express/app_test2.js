
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')

/*
The order of middleware loading is important: middleware functions that are loaded first are also executed first.

If myLogger is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, 
because the route handler of the root path terminates the request-response cycle.

The middleware function myLogger simply prints a message, 
then passes on the request to the next middleware function in the stack by calling the next() function.

You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, 
which creates a sub-stack of the middleware system at a mount point.

*/


// load the cookie-parsing middleware
app.use(cookieParser())


// always
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})





var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

// If you need your middleware to be configurable, export a function which accepts an options object or other parameters, 
// which, then returns the middleware implementation based on the input parameters.

var mw = require('./app_test2_mw.js')

// if not called app.get doesn't gives error when it directs to root folder
// in root/mw

app.use('/mw',mw({ option1: '1', option2: '2' }))


// always
app.use(myLogger)

app.use(requestTime)


// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// in root
app.get('/', function (req, res) {
    var responseText = 'Hello User!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.use('/new_user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    console.log('ID:', req.params.id);
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    res.send('New_User Info')
    next()
  }
)
// handler for the /user/:id path, which prints the user ID will not be called because this url route is defined earlier
app.get('/new_user/:id', function (req, res, next) {
    res.end(req.params.id)
})

/*
To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. 
NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
*/

app.get('/prouser/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') next('route')
    // otherwise pass the control to the next middleware function in this stack denoted by next app.get
    else next()
  }, function (req, res, next) {
    // send a regular response
    res.send('regular')
  }

)

// handler for the /user/:id path, which sends a special response
app.get('/prouser/:id', function (req, res, next) {
    res.send('special')
})


function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
} 
  
function logMethod(req, res, next) {
    console.log('Request Type:', req.method)
    next()
}
  
var logStuff = [logOriginalUrl, logMethod]

app.get('/varuser/:id', logStuff, function (req, res, next) {
    res.send('User Info')
})



var iuser = require('./app_test2_mw1')

app.use('/iuser', iuser)


// use the router and 401 anything falling through
// gives unauthorized
app.use('/admin', function (req, res) {
    res.sendStatus(401)
})


/*
Error-handling middleware always takes four arguments. 
You must provide four arguments to identify it as an error-handling middleware function. 
Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, 
the next object will be interpreted as regular middleware and will fail to handle errors.

If you pass anything to the next() function (except the string 'route'), 
Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

*/





app.listen(5000)