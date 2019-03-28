Person = Backbone.Model.extend({
    initialize: function() {
        console.log('hello world');
        this.bind("change:name", function() {
            console.log(this.get('name') + " is now the value for name");
        });
        this.bind('invalid', function( model, error ) {
            console.error(error);
        });
    },
    defaults: {
        name: "Bob Hope",
        height: "unknown"
    },
    validate: function ( attributes ) {
        if( attributes.name == 'Joe' ) {
            return "Uh oh, you're name is Joe!";
        }
    }
});
var person = new Person();
person.set({name: "Joe", height:"6 feet"}, {validate:true});
console.log(person.toJSON());