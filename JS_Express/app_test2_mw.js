module.exports = function(options) {
    return function(req, res, next) {
        // Implement the middleware function based on the options object
        var responseText = 'Hello World!<br>';
        responseText += '<small>Options are: ' + options.option1 + ' , ' + options.option2 +'</small>'
        res.send(responseText)


      next()
    }
}

