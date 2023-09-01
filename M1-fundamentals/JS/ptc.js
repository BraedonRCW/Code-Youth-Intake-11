// Write a function that console.logs hello world and call it.

function helloWorld (){
    console.log("hello world")
}

helloWorld();

// Write a function with the parameter, howdy, console.log the value of howdy

function greeting(howdy){
    console.log(howdy);
}

greeting("Hello There");

// Write a function that takes two arguments. Add them together;

function addition (num1, num2){
    console.log(num1, num2);
}

addition(5, 7);

// Write a function that will calculate the tax of a number passed through.

function calcTax (num, tax = 13){
    console.log((num * tax) / 100);
}

calcTax(15.78);

// Write and call a function that will return the string howdy

function howdy(){
    return "Howdy";
}

console.log(howdy())

// Write a function for addition, subtraction, multiplication, and division. Have all functions return the value.
// Bonus, try using default parameters to avoid returning NaN on any of the functions



// Write a function that will console.log a madlib. use prompt(); to get a noun, adverb, verb, and an adjective from the user.

// Write a function that will return a random number from 0 - 100;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(100));

