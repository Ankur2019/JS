// Strings, null, undefined


console.log(); // empty, prints an enter


console.log('hello'.length);

console.log('hello'.charAt(0)); // h not "h"

console.log('Hello'.toUpperCase());



var a = String("中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית");

console.log(a);


// you can use the backslash character ("\") at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work. 


var b = "This is a very long string which needs " +
        "to wrap across multiple lines because " +
        "otherwise my code is unreadable."

console.log(String("'")); 
console.log(String("\'")); // same output as before

console.log(String("\\'"));

console.log(b);


var a = 'a';
var b = 'b';
if (a < b) { // true
  console.log(a + ' is less than ' + b);
} else if (a > b) {
  console.log(a + ' is greater than ' + b);
} else {
  console.log(a + ' and ' + b + ' are equal.');
}


// Returns an integer indicating whether the referenceStr comes before, after or is equivalent to the compareStr.
// Negative when the referenceStr occurs before compareStr

console.log(a.localeCompare(b));
console.log('a'.localeCompare('a'));
console.log('b'.localeCompare('a'));


// JavaScript distinguishes between String objects and primitive string values. (The same is true of Boolean and Numbers.)

var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj);  // Logs "object"

// The eval() function evaluates JavaScript code represented as a string

var s1 = '2 + 2';             // creates a string primitive
var s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1));        // returns the number 4
console.log(eval(s2));        // returns the string "2 + 2"

// A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(eval(s2.valueOf())); // returns the number 4



// null expresses a lack of identification, indicating that a variable points to no object.
// A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
// A function returns undefined if a value was not returned.

console.log(typeof null);
console.log(typeof undefined);

var x; 
console.log(x === undefined);
console.log(x === void 0);
console.log(undefined === void 0);

console.log();
console.log();
console.log();





