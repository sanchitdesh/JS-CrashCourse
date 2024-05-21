/*
reduce, filter, find, map etc.

Reduce:

//acc-0
//currentValue-1
//acc + currentValue = result


//acc = 0
// currentVal = 1
//acc + currentVal = 0 + 1 = 1

//acc = 1
//currentVal = 2
// 1 + 2 = 3

//acc = 3
//currentVal = 3
// 3 + 3 =6

//acc = 6
// currentVal = 4
// 6 + 4 = 10

// acc = 10
//currentVal = 5
// 10 + 5 = 15

//acc = 15
//currentVal = 6
// 15 + 6= 21
*/

const numbers = [1, 2, 3, 4, 5, 6];
const number = [1, 3, 4, 5];

const countResult = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// console.log("Result of count of an array is:", countResult);
// Result of count of an array is: 21

const evenNum = numbers.filter((num) => num % 2 === 0);
// console.log("Even Numbers are:", evenNum); //Even Numbers are: [ 2, 4, 6 ]

const firstNum = number.find((num) => num % 2 === 0);
// console.log("First Even Number is:", firstNum);

const square = numbers.map((num) => num * num);
console.log(square);

const totalMethods = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * num)
  .reduce((acc, curVal) => acc + curVal, 0);
//even numbers from array
//create of those even numbers e.g: a= a*a
//count the total of that squares
console.log(totalMethods);

//Result: 56

/*
even - 2, 4, 6
squares: 4, 16, 36
total : 4 + 16 + 36 = 56
 */

//==============================

const peoples = [
  { name: "John", age: 25 },
  { name: "Tyson", age: 26 },
  { name: "Monty", age: 27 }
];

const nameResult = peoples.filter((item) => item.name === "John");
// console.log(nameResult);

const person = peoples.map((item) => item.name);
const personOne = peoples.map((item) => item.age);
// console.log(person);
// console.log(personOne);
// console.log(`Names are: ${person} and there ages are: ${personOne}`);
