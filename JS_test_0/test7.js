// Date, RegExp, Symbol, Closures


// Closures
/*
Whenever JavaScript executes a function, a 'scope' object is created to hold the local variables created within that function. 
It is initialized with any variables passed in as function parameters. 
This is similar to the global object that all global variables and functions live in, 
but with a couple of important differences: firstly, a brand new scope object is created every time a function starts executing, 
and secondly, unlike the global object (which is accessible as this and in browsers as window) these scope objects cannot be directly accessed from your JavaScript code. 
There is no mechanism for iterating over the properties of the current scope object, for example.

So when makeAdder() is called, a scope object is created with one property: a, 
which is the argument passed to the makeAdder() function. makeAdder() then returns a newly created function. 
Normally JavaScript's garbage collector would clean up the scope object created for makeAdder() at this point, but the returned function maintains a reference back to that scope object. 
As a result, the scope object will not be garbage-collected until there are no more references to the function object that makeAdder() returned.

Scope objects form a chain called the scope chain, similar to the prototype chain used by JavaScript's object system.
A closure is the combination of a function and the scope object in which it was created. Closures let you save state — as such, 
they can often be used in place of objects.
*/


function makeAdder(a) {
    
    console.log('a = ',a);
    // console.log('b = ',b); // gives error

    return function(b) {
        console.log('a = ',a);
        console.log('b = ',b);
        console.log('a + b = ',a+b);
        return a + b;
    };
}

console.log('x calling makeadder ');

var x = makeAdder(5);

console.log('y calling makeadder ');
var y = makeAdder(20);

console.log('after calling\n');

console.log('value of x = ',x(6)); // 11
console.log('value of y = ',y(7)); // 27








console.log('\nSymbol\n');

// Symbol


// “Symbol” value represents a unique identifier.
// A value of this type can be created using Symbol():
// Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. 
// The description is just a label that doesn’t affect anything.
// For instance, here are two symbols with the same description – they are not equal:
// We can also give symbol a description (also called a symbol name), mostly useful for debugging purposes:
// If we want to use a symbol in an object literal, we need square brackets. That’s because we need the value from the variable id as the key, not the string “id”



let id1 = Symbol();

let id2 = Symbol("id");
let id3 = Symbol("id");


// var sym = new Symbol(); // will give TypeError

console.log(typeof id1);  // "symbol"

var id_obj = Object(id1);
console.log(typeof id_obj);  // "object"


console.log(id2 == id3); // false

// Symbols allow us to create “hidden” properties of an object, that no other part of code can occasionally access or overwrite.
// For instance, if we want to store an “identifier” for the object user, we can use a symbol as a key for it:

let user = { name: "John" };
let id = Symbol("id");

user[id] = "ID Value";
console.log(user[id] ); // we can access the data using the symbol as the key

// benefit of using Symbol("id") over a string "id"?

// There will be no conflict, because symbols are always different, even if they have the same name.

// if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict

// let id = Symbol("id"); // gives error but if it from another script so that the scripts are completely unaware of each other.

user[id] = "Their id value";
console.log(user[id] );


let user2 = {
    name: "John",
    age: 30,
    [id]: 123
};

// Symbolic properties do not participate in for..in loop.
// but the direct access by the symbol works
for (let key in user2)
{
    console.log(key);
} 
console.log(user2[id] );


// As we’ve seen, usually all symbols are different, even if they have the same names. But sometimes we want same-named symbols to be same entities.
// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later

let id4 = Symbol.for("new_id");

let id5 = Symbol.for("new_id"); // if the symbol did not exist, it is created
console.log(id4 == id5);

// to get name from symbol
console.log( Symbol.keyFor(id4) );


console.log('\nRegExp\n');

// The RegExp constructor creates a regular expression object for matching text with a pattern.

// /pattern/flags
// new RegExp(pattern[, flags])
// RegExp(pattern[, flags])


// The text of the regular expression or, as of ES5, another RegExp object (or literal) to copy (the latter for the two RegExp constructor notations only). 
// Patterns can include special characters so they can more results than would a literal string. 

// If specified, flags indicates the flags to add, or if an object is supplied for the pattern, 
// the flags value will replace any of that object's flags (and lastIndex will be reset to 0) (as of ES2015). 
// If flags is not specified and a regular expressions object is supplied, that object's flags (and lastIndex value) will be copied over. 
// The value is a string containing any combination of the following values: g global match; i ignore case; m multiline; s "dotAll"; u Unicode; y sticky;


var regex1 = /\w+/;
var regex2 = new RegExp('\\w+'); // When using the constructor function, the normal string escape rules (preceding special characters with \ when included in a string) are necessary

console.log(regex1);
// expected output: /\w+/

console.log(regex2);
// expected output: /\w+/

console.log(regex1 === regex2);
// expected output: false



// There are two ways to create a RegExp object: a literal notation and a constructor. 
// To indicate strings, the parameters to the literal notation do not use quotation marks while the parameters to the constructor function do use quotation marks. 
// So the following expressions create the same regular expression:

/ab+c/i; // a literal notation, Use literal notation when the regular expression will remain constant.
new RegExp('ab+c', 'i');// provides runtime compilation of the regular expression. Use the constructor function when you know the regular expression pattern will be changing,
new RegExp(/ab+c/, 'i');



// Example

var re = /(\w+)\s(\w+)/; // \s Matches a white space character, \w Matches any alphanumeric character including the underscore
// + Matches the preceding expression 1 or more times. Equivalent to {1,}.
// $ Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.


var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);


var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end';
var lines = text.split(/\r\n|\r|\n/);

// \r Matches a carriage return (U+000D).
// matches \n Where n is a positive integer, a back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses).
// x|y Matches 'x', or 'y' (if there is no match for 'x').
// The default line ending varies depending on the platform (Unix, Windows, etc.).

console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]



var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1; // The lastIndex is a read/write integer property of regular expression instances that specifies the index at which to start the next match.

console.log(regex.test(str)); // true

regex.lastIndex = 5;
console.log(regex.test(str)); // false (lastIndex is taken into account with sticky flag)
console.log(regex.lastIndex); // 0 (reset after match failure)


var regex1 = new RegExp( "foo", "g" );
var str1 = 'table football, foosball';

console.log(regex1.test(str1));

console.log(regex1.lastIndex);
// expected output: 9

console.log(regex1.test(str1));

console.log(regex1.lastIndex);
// expected output: 19

console.log(regex1.test(str1));





console.log('\n\n\nDate\n');


// Creates a JavaScript Date instance that represents a single moment in time. 
// Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.
// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);


let date = new Date();

console.log(date.getHours() );
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(date.getTimezoneOffset());

var today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(today);
console.log(time);



let Jan01_1970 = new Date(0);
let date3 = new Date("2017-01-26");
let date4 = new Date(2011, 0, 1, 0, 0, 0, 0); 

var date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0