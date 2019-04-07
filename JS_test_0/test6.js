 // functions

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  console.log(message);
}

// the function will create and use its own userName
showMessage();

console.log( userName ); // John, unchanged, the function did not access the outer variable


function Message(from, text) {
    console.log( '1 = ' + from + ": " + text );
  }


Message("Ann");
Message("Ann",);
Message("Ann","Hello");



// To use default value of parameter
function showMessage(from, text = "no text given") {
    console.log('2 = ' + from + ": " + text );
}


showMessage("Ann");
showMessage("Ann",); // Ann: no text given
showMessage("Ann","Hello"); // text given though default value of parameter
// showMessage(,"Hello"); // gives error passed parameters start from left


// If a function does not return a value, it is the same as if it returns undefined:

var adder = new Function('a', 'b', 'return a + b');

console.log(adder(2, 6));
console.log();



// Functions created with the Function constructor do not create closures to their creation contexts;
// they always are created in the global scope. When running them, they will only be able to access their own local variables and global ones, 

var x = 10;

// function createFunction1() {
//     var x = 20;
//     return new Function('return x;'); // this |x| refers global |x|, gives error as x is not defined?? 
// }


// can access the ones from the scope in which the Function constructor was created when function is created using function declaration
function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

//var f1 = createFunction1();
// console.log('f1 = ',f1()); // 10

var f2 = createFunction2();
console.log('f2 = ',f2()); // 20


// Presentatin_0 of average function

function avg0() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
}
  
console.log(avg0(2, 3, 4, 5)); // 3.5

// Presentatin_1 of average function

function avg(...args) { //  the variable args holds all the values that were passed into the function.
    var sum = 0;
    for (let value of args) {
      sum += value;
    }
    return sum / args.length;
}
  
console.log(avg(2, 3, 4, 5)); // 3.5

// what if you want to find the average of an array?
// Presentatin_2 of average function

function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
}
  
console.log(avgArray([2, 3, 4, 5])); // 3.5

// reuse the function that we've already created. Luckily, JavaScript lets you call a function with an arbitrary array of arguments, using the apply()
console.log(avg.apply(null, [2, 3, 4, 5])); // 3.5


// JavaScript lets you create anonymous functions.
// It's extremely powerful, as it lets you put a full function definition anywhere
// a way of "hiding" some local variables — like block scope in C:

var avg = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum / arguments.length;
};

console.log(avg(1,2));


// Another Example

var a = 1;
var b = 2;

(function() {
  var b = 3;
  a += b;
})();


console.log(a); // 4
console.log(b); // 2

// Inner function
// JavaScript function declarations are allowed inside other functions
// An important detail of nested functions in JavaScript is that they can access variables in their parent function's scope:
// unwanted function which has no need in global scope -> This keeps the number of functions that are in the global scope down, which is always a good thing.

function parentFunc() {
    var a = 1;
  
    function nestedFunc() {
      var b = 4; // parentFunc can't use this
      return a + b; 
    }
    return nestedFunc(); // 5
}

console.log(parentFunc());





// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();