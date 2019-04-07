
// Surfboard model
var Surfboard = Backbone.Model.extend({
  defaults: {
    manufacturer: '',
    model: '',
    stock: 0
  }
});

// New instance of Surfboard model - board1
var board1 = new Surfboard({
  manufacturer: 'Channel Islands',
  model: 'Whip',
  stock: 12,
});

// New instance of Surfboard model - board2
var board2 = new Surfboard({
  manufacturer: 'Lost',
  model: 'Sub Scorcher',
  stock: 9,
});

// New instance of Surfboard model - board3
var board3 = new Surfboard({
  manufacturer: 'Firewire',
  model: 'Spitfire',
  stock: 5,
});


// console.log(board1.get('manufacturer'));



// Create Surfboards Collection
var SurfboardsCollection = Backbone.Collection.extend({
  model: Surfboard
});

// Create new instance of SurfboardsCollection
// and add three model instances to it.
var Surfboards = new SurfboardsCollection;
Surfboards.add(board1);
Surfboards.add(board2);
Surfboards.add(board3);


// Create Surfboards View
var SurfboardsView = Backbone.View.extend({

  el: '#table-body',

  initialize: function() {

    // to initialize function in your View Class to call the render function when the model is loaded
    this.render();
  },

  // we’re passing in the current model to each new SurfboardView view instance, so that its attributes can be accessed from inside each of these instances.
  // we need to bind this to the each loop due to a new scoping context that gets created.
  

  render: function() {
    
    this.$el.empty();
    // this.$el.html(''); // works same

    // loop over the collections

    Surfboards.each(function(model) {
      
      var surfboard = new SurfboardView({
        
        mydata: model // we can use other attributes for our model
        // model: model // model is a special attribute

      });

      this.$el.append(surfboard.render().el);
    }.bind(this));
    // Bind creates a new function that will have this set to the first parameter passed to bind()

    return this;
  }

});

// Create Surfboard View
var SurfboardView = Backbone.View.extend({

  tagName: 'tr',

  // in script type="text/template" of index.html

  template: _.template($('#surfboard-template').html()),

  // render: function() {
  //   this.$el.html(this.template(this.model.attributes));
  //   return this;
  // }
  
  // if we use attributes model instead of mydata we don't have to use options

  initialize: function(options){
    this.options = options;
  },
  


  render: function() {
    this.$el.html(this.template(this.options.mydata.toJSON()));
    return this;
  }

});


// Launch app
var app = new SurfboardsView;



/*
// https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/
Well, .bind() simply creates a new function that, when called, has its this keyword set to the provided value. 
So, we pass our desired context, this (which is myObj), into the .bind() function. 
Then, when the callback function is executed, this references myObj.

a solution to the problem of how to keep the context of this within another function,

The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
with a given sequence of arguments preceding any provided when the new function is called.
function.bind(thisArg[, arg1[, arg2[, ...]]])

thisArg
The value to be passed as the this parameter to the target function when the bound function is called. 
The value is ignored if the bound function is constructed using the new operator. 

*/

