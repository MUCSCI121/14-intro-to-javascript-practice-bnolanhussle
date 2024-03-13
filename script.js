// True Values:  any number 1 or greater, true
// False Values:  0, false

let temperature = 68;

if (temperature == 68) {
  console.log("Perfect temperature");
}

// The below is a bad example, do not use single equals sign in if statement
// It causes the value to be assigned instead of tested.
if ((temperature = 69) > 68) {
  console.log("Oops");
}

console.log("Temperature: " + temperature);

if (temperature < 33) {
  console.log("Chance of snow");
} else if (temperature < 70) {
  console.log("Chance of rain");
} else if (temperature < 100) {
  console.log("Chance of thunderstorms");
} else {
  console.log("Chance of sand storms");
}

console.log("-----------------------");
/*
 * Practice using functions
 */

function divide(numerator, denomenator) {
  console.log("Divide started");
  let result = numerator / denomenator;
  return result;
}

function sayHi() {
  console.log("Hi");
}

sayHi();

let divideResult = divide(10, 5);
console.log("Divide Result: ", divideResult);

console.log("Second Divide Result: ", divide(35, 7));

// Create a function that has no parameters and adds 2 to 3 and then returns the result.
function add() {
  let result = 2 + 3;
  return result;
}

let addResult = add();
console.log("Add Result: ", addResult);

// Create a function that takes one parameter, a message, and uses console log to write it out to the console

function message(d) {
  console.log(d);
}

message("One parameter function");

let calculate = (numberOne, numberTwo) => {
  return numberOne * numberTwo;
};

let calcResult = calculate(5, 6);
console.log("Calculate restult: ", calcResult);

let student = "Gary";

function printHelloToName(name) {
  console.log("Hello " + name);
}

printHelloToName(student);

student = "Jill";
printHelloToName(student);

console.log("Numerator: ", numerator);
