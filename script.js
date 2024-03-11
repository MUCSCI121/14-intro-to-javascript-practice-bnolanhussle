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
