// Numbers

// Links: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript



console.log(0.1 + 0.2 == 0.30000000000000004);

console.log(Math.PI);

console.log(parseInt('010'));

console.log(parseInt('010',2));

// unary + operator to convert values to numbers:

console.log(+ '42');
console.log(+ "42");
console.log(+ "4v2");

console.log(+ "4  2");

console.log(+"42");

console.log(x = +'42'+"25"); // no need to add var before x

console.log(typeof(x));


// NaN

console.log(100);
console.log(NaN+100);
console.log(isNaN(100)); // false

console.log(isFinite(-Infinity));

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.The new keyword does the following things:

// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object

// A variable will hold a reference to an instance of an object.
// The actual object is an instance.
// The variable/variables used to access the object hold the references to it.


var a = new Number('123'); // a === 123 is false
var b = Number('123'); 
var c = new Number('hello');
var d = Number('hello'); 

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a==b);
console.log(a===b);
console.log("hello");
console.log(1==1==1); 
console.log(a==b==123); // why?

// The instanceof operator is used to check the type of an object at run time. The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class.

console.log(a instanceof Number);
console.log(b instanceof Number);

console.log(Number.MAX_VALUE);

console.log(Number.NaN);

console.log(Number.NEGATIVE_INFINITY);

var d = new Date('December 17, 1995 03:24:00');
console.log(d);
console.log(Number(d));