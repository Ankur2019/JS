model = new Backbone.Model({
    data:[
        { text: "Google", href: "http://google.com" },
        { text: "Facebook", href: "http://facebook.com" },
        { text: "Youtube", href: "http://youtube.com" }
    ]
});
var View = Backbone.View.extend({
    initialize: function () {
        this.template = $('#list-template').children();
    },
    el: '#container',
    events: {
        "click button": "render"
    },
    render: function() {
        var data = this.model.get('data');
        for (var i=0, l=data.length; i<l; i++) {
            var li = this.template.clone().find('a').attr('href', data[i].href).text(data[i].text).end();
            this.$el.find('ul').append(li);
        }
    }
});


var view = new View({ model: model });