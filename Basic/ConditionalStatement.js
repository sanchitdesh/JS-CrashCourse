/*
if
else if
else


switch case statement


practical example (by implementing an app)
*/

/*
if statement Synatx:

if(condition){
    statement;
}


else if Syntax:


else if(condition){
    statement;
}


else Syntax:

else{
    statement
}


switch case statement syntax:

switch(condition){
    case a:
    statement;
    break;

    case b:
    statement;
    break;
    .
    .
    .

    case n:
    statement;
    break;

    default:
    break;
}


*/

// Example on switch case statement:

//initialize the value

// let month = "Apr";

// switch (month) {
//   case "Jan":
//     console.log("January");
//     break;

//   case "Feb":
//     console.log("February");
//     break;

//   case "Mar":
//     console.log("March");
//     break;

//   default:
//     console.log("Please provide valid month");
//     break;
// }

// console.log("Welcome on the next line");

//=============================

//Weather App

let weather = "rainy";

if (weather === "sunny") {
  console.log("ooh, Gosh! It's a beautiful day");
} else if (weather === "rainy") {
  console.log("Please carry your umbrella with you...");
} else {
  console.log("Check back later to get the latest update on weather report");
}
