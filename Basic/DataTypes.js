/*
String
Number
Boolean
Undefined
Null
Symbol
BigInt
Object
Array
function
Date
promise
*/
// --------------------------------
// String -  characters written inside single quotes or double have the same meaning and both
// are the legal ways to declare string
// "Hello world"
// 'Hello World'

const a = "Hello World";
const b = `Choose Better way ${a}`;
// console.log("String is like:", a); //String is like: Hello World
// console.log("String in back ticks looks like:", b);

//------------------------------------

//Number: It represnts with the value being applied with a number to the variable it
// becomes number data type

let num = 12;
// console.log("Number Data Types:", num); //Number Data Types: 12
// console.log(typeof num); //number
//==============================

//Boolean - Represents by true or false

const ex = true;
const eg = false;
// console.log(ex);
// console.log(typeof ex);
// console.log(eg);

//=========================

// undefined - Represents when we didn't assign any value to the variable name

let z;
// console.log(z); //undefined
// console.log(typeof z); //undefined

//=================================================Null
let example = null;
// console.log(example); //null
// console.log(typeof example); // Object

//Symbol - Represent  unique and immutable values that may be used as key of an object

const sym = Symbol("description");

//================================
//BigInt - Represents the whole number which is greater than 2 | 53 -1

const bigNum = 1234455667888999955555555555n;
// console.log(bigNum);
// console.log(typeof bigNum);

//====================================
//Object: Represent the key value pair

const obj = {
  name: "MyWAY",
  age: "28"
};

// console.log(obj.name); //MyWAY
// console.log(typeof obj.name); //String

// console.log(obj.age); //28
// console.log(typeof obj.age); //String
// console.log(typeof obj); //Object

//================================
// Array - Represent the collection of data and its indexing starts with zero

const arr = [1, 2, 3, 4];
console.log(arr); //[1,2,3,4]
console.log(typeof arr); //Object

//======================
// // Function - callback object can be invoked with zero and more arguments
// cons x= 12;
// const y =12;
// function fun(x,y){
// return x + y
// }

//Date - represents Date and time
const date = new Date();
console.log(date); //2024-04-15T15:36:23.256Z
console.log(typeof date); //object

//promise -

const promise = new Promise((resolve, reject) => {
  if ("//operation is successful") {
    resolve("Pass");
  } else {
    reject("Rejected operation");
  }
});
