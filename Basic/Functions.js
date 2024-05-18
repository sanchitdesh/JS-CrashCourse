//Agenda:
// WHat are functions?
// Different between?
// ES6?

// Functions:
// Function Declaration
// Function Expression

// Function Declaration

function typeName(a, b, c, d) {
  //Code to be executed
}

// Examples:

myData("MyWAY", 27);

function myData(name, age) {
  //   console.log("My Name is", name);
  //   console.log("My Age is:", age);
}

//Function Expression:

//Regular EXpression

const myDataNew = function (rollno) {
  console.log("My Roll no is", rollno);
};

myDataNew(24);

//=======================

//ES6 - Have introduced short Hand Function (Arrow Function) to make simple to the
//regular function expression

const data = (fName, lName) => {
  //   console.log(`My FName is ${fName} and LName is ${lName}`);
};

data("Java", "Script");

//Arguments(Values) corresponds to the parameter
