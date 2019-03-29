Person = Backbone.Model.extend({
    initialize: function() {
        console.log('hello world');
        this.bind("change:name", function() {
            console.log(this.get('name') + " is now the value for name");
            // when validate return something it goes to error binding before change name so then this log will not be showed
        });
        this.bind('invalid', function( model, error ) {
            console.error(error);
            // ass validate returns something error there something to do
        });
    },
    defaults: {
        name: "Bob Hope",
        height: "unknown"
    },
    validate: function ( attributes ) {
        if( attributes.name == 'Joe' ) {
            return "Uh oh, you're name is Joe!";
            // if u don't return anything it automaticlly thiks it true;
            // if something is returned it is thought that there are something error
        }
    }
});
var person = new Person();
person.set({name: "Joe", height:"6 feet"}, {validate:true});
console.log(person.toJSON());

console.log(person.attributes); // gives same output but this is writable so change can be made to it. how it is done? 