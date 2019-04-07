webmodel = Backbone.Model.extend({

    default: { // default or defaults
        name: 'Unknown Website',
        barcode: -1,
        changed: 'hi',
    },

    initialize: function(){
        // alert('hello man');
    },
});


// this jquery waits for the website to fully loaded for this to take effect
$(document).ready(function()
{
    
    var page_0 = new webmodel();
    alert('Default Testing : ' + page_0.get('name') + ' ' + page_0.get('barcode') + ' ' + page_0.get('changed'));
    
    
    var page_1 = new webmodel({name: 'New website'});
    // Another way to setting attributes
    
    page_1.set({name: 'New named website'});
    page_1.set({barcode : 1});


    // alert('Testing : ' + page_1.get(name)); // gives undefined in name field
    alert('Testing : ' + page_1.get('name') + ' barcode = ' + page_1.get('barcode'));
    
    
    console.log('hello');
    
});