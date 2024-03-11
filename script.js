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

function message(text) {
  console.log(text);
}

message("One parameter function");
