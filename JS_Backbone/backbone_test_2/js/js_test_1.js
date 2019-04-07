sandwitch_model = Backbone.Model.extend({

    defaults: {
        bread: 'wheat',
    },
    
    initialize: function(){
        // alert('hello man');

        console.log('in initialize function');
        this.bindEvents();
    },

    
    bindEvents: function(){
        
        console.log('in bindEvents function');

        this.on("change :bread", function(model){ // not "change :bread", not "changed:bread" is acceptable

            var my_new_bread = model.get("bread");
            console.log('alerted in bindEvent');

            alert('Bread changed to ' + my_new_bread);
        });
    },
});


// this jquery waits for the website to fully loaded for this to take effect
$(document).ready(function()
{
    
    var my_sandwitch = new sandwitch_model();

    my_sandwitch.set({bread: 'new_wheat'});

    my_sandwitch.set({bread: 'cake'});
    
    
    
    console.log('hello');
    
});