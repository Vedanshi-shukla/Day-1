
//LET
// used to initialize the variable
let item;
let character="";
let num = 18;
let x = 10;
console.log(x);
x = 20; // Valid as we can alter or chnage the value(mutable)

//Some people also define multiple variables in this multiline style:
let user = 'Vedanshi',
  age = 21,
  message = 'Hey';
  //alert(message);

typeof 0; //defines the data type


//CONST
//to fix the value of a variable which will be constant all over the program
const result="Hello";
console.log(result); //to print
const y = 30; 
// y = 40; // Error: Assignment to constant variable
// value cannot be altered (immutable)

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//BOOLEAN
let isGreater = 4 > 1;
console.log(isGreater);

let age2 = null;
//It’s just a special value which represents “nothing”, “empty” or “value unknown”

let val=("6"/"2");
console.log(val);

let value = true;
console.log(typeof value);

let str = "123";
console.log(typeof str); 
let num1 = Number(str); // becomes a number 123
console.log(typeof num1); 




//3 browser-specific functions to interact with visitors:
//alert
//prompt
//confirm

    //let age3 = prompt('How old are you?', 100);

    //alert(`You are ${age3} years old!`); // You are 100 years old!