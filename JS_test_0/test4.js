// Objects

// Creating empty object


var data = 1;
console.log(data);
var data = 2; // declaring same variable twice override the previous value of variable
console.log(data);


var obj1 = new Object(); // or new Object(undefined); or new Object(null);

console.log(obj1);

var obj2 = {} // is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times.

console.log(obj2);
var test = "data";

var obj3 = {
    name: 'Carrot',
    _for: 'Max', // 'for' is a reserved word, use '_for' instead.
    "likes birds": true, // For multiword properties, the dot access doesn’t work:
    [test]: 5,
    [test + 'com']: 15,
    'array': [1, 2, 3, 4],
    details: {
      color: 'orange',
      size: 12,
    },
  };

console.log(obj3);

console.log(obj3.details.color);
console.log(obj3['details']['size']);

obj3.name = 'Simon';
console.log(obj3);


obj3['_for'] = 'Min';
// alert(obj3._for);


var _for = obj3['_for'];
console.log(_for);
console.log(obj3.length); // Object.length -> Has a value of 1. shows undefined ??
console.log(obj3.prototype); // undefined
// console.log(obj3.prototype.toString()); // gives error ?? but it Returns a string representation of the object.

delete obj3[[test]] // delete obj3.test; data does not get deleted

console.log('after delete = \n',obj3);

// in object “ordered in a special fashion”: integer properties are sorted, others appear in creation order. 
for (let key in obj3)
{
    console.log('key = ',key);
}

function Person(name, age)
{
    this.name = name;
    this.age = age;
}

// Define an object
var obj4 = new Person('You', 24); 

console.log(obj4.name);

// obj4.name = ankur; // not possible assigning like this

var name = obj4.name;

console.log(name);


// Boolean Object

var o1 = new Object(true);
console.log(o1);

var o2 = new Object(Boolean());
console.log(o2);

var o3 = new Boolean(true);
console.log(o3);


// Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.
// When an object variable is copied – the reference is copied, the object is not duplicated.
// If we imagine an object as a cabinet, then a variable is a key to it. Copying a variable duplicates the key, but not the cabinet itself.
// Two objects are equal only if they are the same object.
// two independent objects are not equal, even though both are empty:
// create duplicate copy of object in memory (not reference) is doable but difficult -> because there’s no built-in method for that in JavaScript. 

// Const object

const user = {
    name: "John"
  };
  
user.age = 25; // (*)
console.log(user); // age is added to user object

user.name = "man";
console.log(user); // value of name can be changed

// const user = { // Can't reassign user
//     name: "new"
//   };


let user2 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

Object.assign(user2, permissions1, permissions2);  // If the receiving object (user) already has the same named property, it will be overwritten
console.log(user2);


let clone = Object.assign({}, user2); // It copies all properties of user into the empty object and returns it. Actually, the same as the loop, but shorter.
console.log(clone);

let alone = clone;
console.log(alone);


let user3 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

console.log("key" in user3);
console.log("name" in user3);

clone = Object.assign({}, user3);
  
console.log( user3.sizes === clone.sizes ); // true, same object
  
// user and clone share sizes
user3.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one

// To fix that, we should use the cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. 
// That is called a “deep cloning”.

// clone = _.cloneDeep(user3);

// <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.10.0/lodash.min.js"></script>
// will needed to add previous line when working with html file to work the next line
// var deep = _.cloneDeep(user3); // use a working implementation of it from the JavaScript library lodash,
// console.log( 'after deep cloning = ',user3.sizes === deep.sizes );


console.log('Creating custom object');



// Creating custom object

// JavaScript uses functions as classes.


// Preety straight-forward, but ugly. You end up with dozens of functions in your global namespace. 

// The second definition of an Object overwrites the first one. 
// In general the last definition of an object overwrites all previous definitions.



function makePerson(first, last) {
    return {
      first: first,
      last: last
    };
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}


var s = makePerson('Simon', 'Willison');
console.log(personFullName(s)); // "Simon Willison", gives undefined undefined ??
console.log(personFullNameReversed(s)); // "Willison, Simon" gives undefined, undefined ??



// attaching a function to an object

// this refers to the current object.
// If you called it using dot notation or bracket notation on an object, that object becomes this. 
// If dot notation wasn't used for the call, this refers to the global object.

function makePerson2(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
        // return this[first] + ' ' + this[last]; // gives undefined undefined, Since there are no global variables called first or last we get undefined for each one.
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
}

console.log('attaching a function to an object');

var s2 = makePerson2('Simon', 'Willison');

var fullName_2 = s2.fullName;
console.log(fullName_2()); // undefined undefined, When we call fullName_2() alone, without using s.fullName(), 
// this is bound to the global object. Since there are no global variables called first or last we get undefined for each one.

console.log(s2.fullName()); // "Simon Willison"
// console.log(s2.fullName_2()); // gives error as s2.fullName_2 is not a function
console.log(s2.fullNameReversed()); // "Willison, Simon"


// Better Representation

console.log('\n\n\nBetter Representation\n\n');

function Person3(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
      return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
      return this.last + ', Better Representation ' + this.first;
    };
}
var s3 = new Person3('Simon', 'Willison');

var fullName_3 = s3.fullName; // this only works when we use new keyword
// The improved function still has the same pitfall with calling fullName() alone.
console.log(fullName_3()); // undefined undefined


console.log(s3.fullName); //  gives [Function], we can't use s3.fullName() as it gives error when new keyword is not used
console.log(s3.fullName()); // but we can use s3.fullName() when new keyword is used, then gives "Simon Willison"

console.log(s3.fullNameReversed()); // "Willison, Simon"




// Better version as we stopped  Every time we create a person object we are creating two brand new function objects within it 
// we are creating the method functions only once, and assigning references to them inside the constructor.

function personFullName4() {
    return this.first + ' ' + this.last;
}

function personFullNameReversed4() {
    return this.last + ', ' + this.first;
}

function Person4(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
}

// More Better
// Person.prototype is an object shared by all instances of Person. 
// It forms part of a lookup chain (that has a special name, "prototype chain"): 
// any time you attempt to access a property of Person that isn't set, 
// JavaScript will check Person.prototype to see if that property exists there instead. 
// As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.

// after closing bracket using semiclone is optiona;
// the semicolon is parsed as a separate empty statement, which doesn't do anything. 


console.log('\nBetter has no limit :P\n');

function Person5(first, last) {
    this.first = first;
    this.last = last;
}

Person5.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};

Person5.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

// This is an incredibly powerful tool. 
// JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime:

Person5.prototype.firstNameCaps = function() {
    return this.first.toUpperCase();
};

var s5 = new Person5('Simon', 'Willison');

console.log(s5.firstNameCaps()); // "SIMON"




console.log('\nadd things to the prototype of built-in JavaScript objects.\n');

// Interestingly, you can also add things to the prototype of built-in JavaScript objects.
// Let's add a method to String that returns that string in reverse:

var str = 'Simon';
// s.reversed(); // s.reversed is not a function

String.prototype.reversed = function() {
    
    let r = '';
    for (let i = this.length - 1; i >= 0; i--) {
      r += this[i];
    }
    return r;
};
  
console.log(str.reversed());

console.log('This can now be reversed'.reversed()); // working on string literals


console.log(s5.toString()); // [object Object]

Person5.prototype.toString = function() {
  return '<Person: ' + this.fullName() + '>';
}

console.log(s5.toString()); // "<Person: Simon Willison>"


// Use of new

// Adding new does 5 things:

// It creates a new object. The type of this object is simply object.
// It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
// It makes the this variable point to the newly created object.
// It executes the constructor function, using the newly created object whenever this is mentioned.
// It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.



// The window object is supported by all browsers. It represents the browser's window.

// All global JavaScript objects, functions, and variables automatically become members of the window object.

// Global variables are properties of the window object.

// Global functions are methods of the window object.



// we need to run this code in browser console to get out from the error of Window is not defined


console.log('\n\nUse of new');


function Foo() { 
    return this; 
}

var a = Foo();       //returns window object
var b = new Foo();   //returns empty object of foo

// console.log(a instanceof Window);  // true
console.log(a instanceof Foo);     // false

// console.log(b instanceof Window);  // false
console.log(b instanceof Foo);     // true



console.log('hello');

console.log();
console.log();

