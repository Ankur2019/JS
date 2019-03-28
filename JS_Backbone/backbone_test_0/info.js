

var pass = 4;

/*
MV* is Model-View-Whatever architecture.

MV* Frameworks are designed to make our code easier to maintain , easier to Test(E2E , UnitTest) and to improve the user experience.

MV* framework popular patterns

Model-View-Controller(MVC)
Model-View-View Model(MVVM)
Model-View-Presenter(MVP)
AngularJS , BackboneJS , KnockoutJS, EmberJS , Meteor, ExtJS some of the famous MV* framework libraries.


Model: Model is generally for the business objects. It will directly manage the data, logic, and the rules of the application.

View: It’s a UI, which shows the output of the actions.

Controller: Controller is the heart of an application. It accepts input and converts it to the commands for Model or View.

*/


/*
The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. 

In the DOM, documents have a logical structure which is very much like a tree; to be more precise, it is like a "forest" or "grove", which can contain more than one tree. 

The DOM is basically an API you use to interface the document with, and is available in many languages as a library ( JS is one of those languages ). 
The browser converts all the HTML in your web page to a tree based on the nesting.

*/

/* the acronym CRUD stands for create, read, update and delete.  */


// var Surfboard = Backbone.Model.extend({ // Backbone is not defined
//     defaults: {
//       manufacturer: '',
//       model: '',
//       stock: 0
//     }
// });



// installed : npm install jwt-decode auth0-js --save
// ankur2019@auth0.com using github


// The JSON.stringify() method converts a JavaScript object or value to a JSON string, 
// optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified

// alert(), An alert dialog box is mostly used to give a warning message to the users.

// prompt(), The prompt dialog box is very useful when you want to pop-up a text box to get user input. 
// Thus, it enables you to interact with the user. The user needs to fill in the field and then click OK.

// confirm(), A confirmation dialog box is mostly used to take user's consent on any option. It displays a dialog box with two buttons: OK and Cancel.

// adding the following line this.render(); to initialize function in your View Class to call the render function when the model is loaded






// el

// el is just an identifier and it refers to an element, a DOM element, which is a convention in that library
// It creates a tree of elements and appends them to body
// el is a function that's been placed on the $ object, and can be invoked to generate DOM element
// el also acts as a placeholder for other objects, like the table function in $.el.table()

// this.el; 
// here what you have is the html element, 
// you will be able to access(read/modify) the html 
// properties of this element,
// $(this.el) wraps an element with jQuery (or Zepto).


// this.$el;
// you will have the element but 
// with all of the functions that jQuery provides like,
// hide,show  etc, its the equivalent of $('#myel').show();
// $('#myel').hide(); so this.$el keeps a reference to your 
// element so you don't need to traverse the DOM to find the
// element every time you use it. with the performance benefits 
// that this implies.
// in short, $el is jQuery wrapper around el.
// this.$el is a cached reference to the jQuery (or Zepto) object, so a copy of what you would get from calling $(this.el). 
// The intent is to save you the need to call $(this.el), which may have some overhead and therefor performance concerns.


// Document object model.
// The DOM is the way Javascript sees its containing pages' data. It is an object that includes how the HTML/XHTML/XML is formatted, as well as the browser state.
// A DOM element is something like a DIV, HTML, BODY element on a page. You can add classes to all of these using CSS, or interact with them using JS.
// Views must have a DOM element at all times. 

// Templates allow us to render the User Interface as an alternative to direct DOM manipulation.
// The initialize function, which immediately runs when a new instance of the view is created.
// The render function, which renders the view template from model data.

// The Backbone.js toJSON model returns copy of the attributes as an object for JSON stringification.


// Parses a Handlebars-like template to create a reusable template function.
// Everything you need to know about underscore template is here. Only 3 things to keep in mind:
// <%  %> - to execute some code
// <%= %> - to print some value in template
// <%- %> - to print some values HTML escaped


// In JQuery the on method have: (no reference found for js)
// $(selector).on(event,childSelector,data,function,map)

/*
https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
// https://getbootstrap.com/docs/4.3/components/buttons/

The Bootstrap grid system has four classes:

xs (for phones - screens less than 768px wide)
sm (for tablets - screens equal to or greater than 768px wide)
md (for small laptops - screens equal to or greater than 992px wide)
lg (for laptops and desktops - screens equal to or greater than 1200px wide)
*/


// Those script tags are a common way to implement templating functionality (like in PHP) but on the client side.
// By setting script tag type other than text/javascript, browser will not execute the internal code of script tag. 
// This is called micro template. This concept is widely used in Single page application(aka SPA).

// Use the <hr> tag to define a thematic change in the content: (gives something like a boundary)

// https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/

/*

The dollar sign ($) and the underscore (_) characters are JavaScript identifiers, which just means that they identify an object in the same way a name would. The objects they identify include things such as variables, functions, properties, events, and objects.

For this reason, these characters are not treated the same way as other special symbols. Instead, JavaScript treats $ and _ as if they were letters of the alphabet.

Identifiers are names.

In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).

In JavaScript, the first character must be a letter, or an underscore (_), or a dollar sign ($).

Subsequent characters may be letters, digits, underscores, or dollar signs.
.@# etc. are not valid.

*/


/*
The Backbone.js Event listenTo method tells an object to listen to a particular event on another object. It provides callback function when an event occurs and also keeps track of events.

object.listenTo(other, event, callback)  
example: initialize: function() { this.listenTo(this.model, 'remove', this.remove); },

other: It is used to define the name of the other object.
event: It is used to bind an object.
callback: It is reference to the code and called with object as context.

*/

// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// The Backbone.js isNew model determines the state of new. If a model doesn't have an id and is not saved to the server, it is considered to be new
// It retrieves the attributes from each model in the collection.
// The Backbone.js navigate method is used to update and save the application as URL. It can also be done by calling the route function.


// $() function is as synonym for jQuery() in the popular jQuery Javascript framework. 
// It returns a jQuery object (or objects), which includes much more than just a reference to the DOM element. 
// Most of them also have a way to relinquish the $ so that it can be used with another library that uses it. 
// In that case you use jQuery instead of $. In fact, $ is just a shortcut for jQuery
// The $ represents the jQuery Function, and is actually a shorthand alias for jQuery

// Content Delivery Network (CDN).

// video tutorial

// https://www.youtube.com/watch?v=Xj9QTgtwpbI&list=PL4CUYg-6qxdF1bQC60TpId5bkCcoekf0j&index=4
// https://www.youtube.com/watch?v=SktK4hcQf10&list=PL4CUYg-6qxdF1bQC60TpId5bkCcoekf0j&index=10



/*

Backbone.js isn’t a true MVC framework and lacks controllers, but has routers for a similar purpose. 
This isn’t really a fault. A controller tends to be most useful for client-server relationships because 
the controllers on the server intercept the requests from the view on the client machine and dictate the actions that should be done, 
but when everything is run in the client, the view can communicate directly with the model.

Backbone connects everything to your existing back-end API through a RESTful JSON interface, 
and can even synchronize with back ends that don’t support REST and JSON, though it takes a little tweaking.

*/




























// cd /etc/NetworkManager/system-connections ls -la
// sudo cat geekdesk
// @N3r5d3vs.2014
// g33kd35k@

// git init
// git status
// git add .
// git commit -m "First commit"
// git remote add origin https://github.com/Ankur2019/JS
// git pull https://github.com/Ankur2019/JS
// git push origin master