const express = require('express')
const app = express()
const port = 4000

// The req (request) and res (response) are the exact same objects that Node provides, 
// so you can invoke req.pipe(), req.on('data', callback), and anything else you would do without Express involved.


// app.get(name), Returns the value of name app setting, where name is one of the strings in the app settings table. 
// app.get(path, callback [, callback ...]), Routes HTTP GET requests to the specified path with the specified callback functions.


// app.get('/', (req, res) => res.send('Hello World!'))

// respond with "hello world" when a GET request is made to the homepage

// Matches the routes depending on the order of GET request


// It takes the first GET or POST request

// app.get('/', function (req, res) {
//     res.send('hello world')
// })

// // GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

// This route path will match acd and abcd.
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
})

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
})

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', function (req, res) {
    res.send('ab*cd')
})

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', function (req, res) {
    res.send('ab(cd)?e')
})

// This route path will match anything with an “a” in it.
app.get(/ant/, function (req, res) {
    res.send('/ant/')
})

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
    res.send('/.*fly$/')
})

app.get('/random.text', function (req, res) {
    res.send('random.text')
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
}) // Cannot GET /

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

// app.listen(path, [callback]), Starts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen().
// app.listen([port[, host[, backlog]]][, callback]), Binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
// If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful for cases like automated tasks (tests, etc.).

// The app returned by express() is in fact a JavaScript Function, designed to be passed to Node’s HTTP servers as a callback to handle requests. 
// This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the app does not inherit from these (it is simply a callback):


// app.all(path, callback [, callback ...])
// This method is like the standard app.METHOD() methods, except it matches all HTTP verbs.

// app.use([path,] callback [, callback...])
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.

// Routing refers to how an application’s endpoints (URIs) respond to client requests.
// These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. 
// Route handlers can be in the form of a function, an array of functions, or combinations of both

// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. 
// The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:4000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

// Route path: /flights/:from-:to
// Request URL: http://localhost:4000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }

// app.get('/flights/:from-:to', function (req, res) {
app.get('/flights/:from.:to', function (req, res) {
    res.send(req.params)
})

// Using Regular Expression
// Route path: /user/:userId(\d+)
// Request URL: http://localhost:4000/user/42
// req.params: {"userId": "42"}
// Cannot GET /user/42
app.get('/user/:userId(\d+)', function (req, res) {
    res.send(req.params)
})

// More than one callback function can handle a route (make sure you specify the next object).
app.get('/example/b', 

    function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    },
    
    function (req, res) {
        res.send('Hello from B!')
    }
)


var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}
  
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}
  
var cb2 = function (req, res) {
    res.send('Hello from C!')
}

// An array of callback functions can handle a route.
app.get('/example/c', [cb0, cb1, cb2])

// A combination of independent functions and arrays of functions can handle a route. For example:

app.get('/example/d', [cb0, cb1], 
    function (req, res, next) {
        console.log('the response will be sent by the next function ...');
        next();
    }, 
    function (req, res) {
        res.send('Hello from D!')
    }
)

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) { // Cannot GET /book
    res.send('Add a book')
  })
  .put(function (req, res) { // Cannot GET /book
    res.send('Update the book')
  })


//   express.Router
// Use the express.Router class to create modular, mountable route handlers. 
// A Router instance is a complete middleware and routing system; for this reason, 
// it is often referred to as a “mini-app”.

// The app will now be able to handle requests to /birds and /birds/about, 
// as well as call the timeLog middleware function that is specific to the route.


var birds = require('./app_test0_mw')

app.use('/birds', birds)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. 
// If none of these methods are called from a route handler, the client request will be left hanging.
// JSONP (JavaScript )bject Notation with Prefix) is a great away to get around cross-domain scripting errors.

/*
Middleware functions are functions that have access to the request object (req), the response object (res), 
and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.
*/

/*
Command:

npm init (on required folder)
npm install express --save
node test0_app.js
npm install pug --save

Express GEnerator:

npm install express-generator -g
cd app_test1
npm install
npm install --save-dev nodemon
DEBUG=app_test1:* npm start
DEBUG=app_test1:* npm run devstart

*/


/*
Link:

https://expressjs.com/en/starter/basic-routing.html
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
https://evanhahn.com/understanding-express/


*/