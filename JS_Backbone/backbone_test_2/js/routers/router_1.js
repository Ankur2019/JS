var Router = Backbone.Router.extend({
    routes: {

        ":test" : "test",

        "foo/:bar" : "paramtest",

        "*action" : "func",
    },
    func: function (action) {
        console.log("action = ",action);
    },
    paramtest:function (p) {
        console.log("p = ",p);
    },

    test: function(t){
        console.log("t = ",t);
    },

});
new Router();

// if u don't add this it won't check url after hgashtag
// it also creats browser history
Backbone.history.start();
