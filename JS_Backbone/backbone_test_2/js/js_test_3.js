student_model = Backbone.Model.extend({

    defaults: {
        name: 'Unknown',
    },
    
    initialize: function(){
        // alert('hello man');
    },
});

student_collection = Backbone.Collection.extend({
    
    model: student_model,

    initialize: function(){
        this.bindEvents();
    },

    bindEvents: function(){
        
        console.log('in bindEvents function');

        this.on("change :name", function(model){

            alert('Name changed ' + model.get("name"));
        });

        this.on("add", function(model){

            alert('student added ' + model.get("name"));
        });

        this.on("remove", function(model){

            alert('student removed ' + model.get("name"));
        });
    },

});



// this jquery waits for the website to fully loaded for this to take effect
$(document).ready(function()
{
    
    var jony = new student_model({name: "jony", id: 0});
    var vicky = new student_model({name: "vickyy", id: 1});
    

    var collection_1 = new student_collection([vicky, jony]); // id -> 1,0
    console.log('collection_1 size = ', collection_1.size());

    display_collection(JSON.stringify(collection_1.size()), collection_1); // JSON.stringify is not must

    var ela = new student_model({name: "ela", id: 2});
    var pepe = new student_model({name: "pepe", id: 3});
    
    collection_1.add([ela,pepe]);
    display_collection(JSON.stringify(collection_1.size()), collection_1);

    collection_1.remove([ela]);
    display_collection(JSON.stringify(collection_1.size()), collection_1);

    
    console.log('hello');


    var student0 = collection_1.get(0);
    student0.set({name: "peter"});
    display_collection('after ' + JSON.stringify(collection_1.size()), collection_1);
    // 3 [{"name":"vickyy","id":1},{"name":"peter","id":0},{"name":"pepe","id":3}]

    // collection_1.add([neo]);
    // collection_1.remove([neo]);


    
});

function display_collection(string, collection){
    console.log(string + " " + JSON.stringify(collection.toJSON()));
}