// array

var a = new Array();
a[0] = 'dog';
a[1] = 'cat';

console.log(a.length);

a = ['dog', 'cat', 'hen'];

console.log(a.length);

a[5] = 'fox';
console.log(a.length);

console.log(typeof a[90]);
a.push(100); // Methods push and unshift can add multiple elements at once:

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

a.pop();


// From ES2015
for (const currentValue of a) {
    console.log(currentValue);
  }

console.log(a.toString());
console.log(a.toLocaleString());

console.log(a.reverse());
console.log(a.length);
console.log(a.shift());
console.log(a.length);

a.unshift('Apple','new'); // Add the element to the beginning of the array:

a.age = 25; // That’s possible, because arrays are objects at their base. We can add any properties to them.
// Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.
console.log(a.length);
console.log(a);
console.log(a[a.length-1]);
console.log(a.pop()); // age does not get popped
console.log(a);

let pos = a.indexOf('Apple');
console.log(pos);
let n = 2;

// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

a.splice(pos, n);
console.log(a);

var a_copy = a.slice();

a[0] = 'nice';

console.log('a = ',a);
console.log('a_copy = ',a_copy);
console.log(a.length);
a.length = 10;
console.log(a.length);



//var a2 = a.slice(1[, 2])
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

console.log(matrix[1][1]);
console.log(matrix[1]);



console.log();
console.log();
console.log();

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
// console.log();