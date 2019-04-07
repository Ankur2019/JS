model = new Backbone.Model({
    data:[
        { text: "Google", href: "http://google.com" },
        { text: "Facebook", href: "http://facebook.com" },
        { text: "Youtube", href: "http://youtube.com" }
    ]
});
var View = Backbone.View.extend({

    // tagName, className, id, attributes

    initialize: function () {
        // console.log(this.options.blank_option); // this.options is undefined
        
        this.template = $('#list-template').children(); // children of list template
    },
    el: '#container',
    events: {
        "click button": "render" // works only for the button of the dom element #container
    },
    // there is render built in render function but it doesn't do anything. So we need to overwrite it.
    render: function() {
        var data = this.model.get('data');
        for (var i=0, l=data.length; i<l; i++) {
            var li = this.template.clone().find('a').attr('href', data[i].href).text(data[i].text).end();
            // clone the template
            // find the a elemnt
            // changes the href and also the text within it
            // end is used so that we can get back to the li element 
            this.$el.find('ul').append(li);
        }
    }
});


// var view = new View({ blank_option: "empty string" });

var view = new View({ model: model });

