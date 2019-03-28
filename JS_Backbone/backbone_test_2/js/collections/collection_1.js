var Person = Backbone.Model.extend({
	initialize: function() {
		console.log('Model Person is initialized.');
	},
	defaults: {
		name: 'undefined',
        age: 'undefined',
        id: 0, //needed to be unique for all models? not auto incremented
	}
});

var People = Backbone.Collection.extend({
	initialize: function() {
		console.log("People Collection is initialized");
	},
	model: Person
});

// model
var person = new Person({name:"Joe"});
console.log("person = ",person.toJSON());

// collection
var people = new People(person);
console.log("people = ",people.toJSON());


people.add([{name:"Bob", age:'20', height:'6 ft', id: 1}, {name:"Jim"}]); // adding can be done using a comparator function in specific position
console.log(people.toJSON());

console.log('Models = \n',people.models);
console.log(people.get(0));


people.remove(person); // Joe
console.log(people.toJSON());

people.reset([{name:"Bob", age:'20', height:'6 ft'}, {name:"Jim"}, person]);
console.log(people.toJSON());

// console.log(people.getByCid('c1')); // doesn't work
console.log(people.models);


people.push([{name:"aero"}]); // Add always at the end of the collection
console.log('after push ', people.toJSON());

people.pop(); // Add always at the end of the collection
console.log(people.toJSON());


console.log('in pluck = ',people.pluck('name'));
console.log('in where = ',people.where({name: "Bob"})); // all the models that have a Bob, case sensitive








/*
cid is a property for Backbone Models that serves as the unique identifier for each model until they are assigned a real id. 
After the model id or the attribute that matches the idAttribute has been assigned, the cid is no longer used. 
For more information see the backbone.js docs. 
Also View's have cid, but that is more for internal bookkeeping and jquery event binding/unbinding.
*/

/*
id is also a special property for models, it is meant to hold the backend identifier for the model 
(most databases create some sort of identifier for each new entry/row). When this identifier is labeled id things work out of the box with Backbone.js, 
but there are some Databases which label their identifiers differently (for example MongoDB with _id). 
*/