TheView = Backbone.View.extend({

    // <span class="cake" id="span1"> </span>
    // Create HTML DOM element on the fly

    tagName: 'span',
    className: 'cake',
    id: 'span1',
    
    defaults: {
        
    },
    
    initialize: function(){
        // alert('hello man');
        
        console.log(this.el);
        console.log(this.$el);

        // $('#unique').append(this.el);

        // this.$el.append('haha');

        this.render();
    },

    render: function()
    {
        var template = _.template($('#temp_01').html(), {});
        
        this.$el.html(template);

    },

    events: {
        "click": "clicked",
        "mouseover .hello": "mouseover",
        // "click #unique": "clicked",
    },

    clicked: function(){
        alert('you clicked it');
    },

    mouseover: function(){
        alert('you touched it');
    },

});


// this jquery waits for the website to fully loaded for this to take effect
$(document).ready(function()
{
    
    // var aview = new TheView();

    var bview = new TheView({el: $('#unique')}); // the first unique 
    
    
    console.log('hello');
    
});