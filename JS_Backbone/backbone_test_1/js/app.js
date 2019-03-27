

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
    this.render();
  },

  // we’re passing in the current model to each new SurfboardView view instance, so that its attributes can be accessed from inside each of these instances.
  // we need to bind this to the each loop due to a new scoping context that gets created.
  
  render: function() {
   this.$el.empty();
  //  this.$el.html('');

    Surfboards.each(function(model) {
      var surfboard = new SurfboardView({
        mydata: model
        // model: model
      });

      this.$el.append(surfboard.render().el);
    }.bind(this));

    return this;
  }

});

// Create Surfboard View
var SurfboardView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template($('#surfboard-template').html()),

    // render: function() {
    //   this.$el.html(this.template(this.model.attributes));
    //   return this;
    // }
  
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


