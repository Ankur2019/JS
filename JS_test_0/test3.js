// Variables, Operators, Control structures



for (let a = 0; a < 5; a++) {
    console.log(a);
  }

// console.log(a); // let allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.

const Pi = 3.14; // variable Pi is set 
// Pi = 1; // will throw an error because you cannot change a constant variable.
// in JavaScript, blocks do not have scope; only functions have a scope.


var input = 3;
do {
  input++;
} while (input<10);

console.log(input);



// If you add a string to a number (or other value) everything is converted into a string first.



var a = '3' + 4 + 5;
var b = 3 + 4 + '5'

console.log(parseInt("0101",2) & parseInt("1101",2));
// expected output: 5;
console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001
// expected output: 1;


console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof b);



// var c = parseInt("1111",2);
var c = -7;
console.log(Number(c).toString(2));

d = c>>1; // right shift


console.log("d = ",d); // d =  -4 for -7 ?? -> go thhrough two's compliment -> then shift -> then again two's compliment


console.log(Number(d).toString(2));

// >>>, Zero-fill right shift; It doesn't just convert non-Numbers to Number, it converts them to Numbers that can be expressed as 32-bit unsigned ints.
e = c>>>1;
console.log("e = ",e);

console.log(Number(e).toString(2));

// For bitwise logical operator
// The operands are converted to 32-bit integers and expressed by a series of bits (zeroes and ones). 
// Numbers with more than 32 bits get their most significant bits discarded
// The operands of all bitwise operators are converted to signed 32-bit integers in two's complement format.

var age = 20;

var allowed = (age > 18) ? 'yes' : 'no';

console.log('allowed = ',allowed);



switch (allowed) { // can have expressions in both the switch part and the cases 
  
  case 'y'+'es':
    console.log('allowed = 0');
    break; // If you don't add a break statement, execution will "fall through" to the next level. 
  
  case 'no':
    console.log('allowed = 1');
    break;
  
  default: // default clause is optional. 
    console.log('allowed = 2');
}



console.log();
console.log();
console.log();
console.log();
console.log();
console.log();