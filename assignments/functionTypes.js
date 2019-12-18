// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function addOne(n) {
  return n+1;
}

var addOne = function(n) {
  return n+1;
};

var addOne = n => n+1;

var addOne = n => {
  return n+1;
};

addOne(5);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function subOne(n) {
  return n-1;
}

var subOne = function(n) {
  return n-1;
};

var subOne = n => n-1;

var subOne = n => {
  return n-1;
};

subOne(8);


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function sum(x, y) {
  return x+y;
}

var sum = function(x, y) {
  return x+y;
};

var sum = (x,y) => x+y;

var sum = (x, y) => {
  return x+y;
};

sum(5,8);


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function sub(x, y) {
  return x-y;
}

var sub = function(x, y) {
  return x-y;
};

var sub = (x,y) => x-y;

var sub = (x, y) => {
  return x-y;
};

sub(10,6);



/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function mul(x, y) {
  return x*y;
}

var mul = function(x, y) {
  return x*y;
};

var mul = (x,y) => x*y;

var mul = (x, y) => {
  return x*y;
};

mul(10,6);



/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function div(x, y) {
  return x/y;
}

var div = function(x, y) {
  return x/y;
};

var div = (x,y) => x/y;

var div = (x, y) => {
  return x/y;
};

div(10,6);



/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function double(x) {
  return x*x;
}

var double = function(x) {
  return x*x;
};

var double = (x) => x*x;

var double = (x) => {
  return x*x;
};

double(13);




/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function operation(sign, num1, num2){
  if(sign == "add"){
    return (`${num1} + ${num2} = ${num1 + num2}`);
  }
  else if(sign == "subtract"){
    return (`${num1} - ${num2} = ${num1 - num2}`);
  }
  else if(sign == "multiply"){
    return (`${num1} * ${num2} = ${num1 * num2}`);
  } else if(sign == "divide") {
    return (`${num1} / ${num2} = ${num1 / num2}`);
  }
}

var operation = function(sign, num1, num2){
  if(sign == "add"){
    return (`${num1} + ${num2} = ${num1 + num2}`);
  }
  else if(sign == "subtract"){
    return (`${num1} - ${num2} = ${num1 - num2}`);
  }
  else if(sign == "multiply"){
    return (`${num1} * ${num2} = ${num1 * num2}`);
  }
  else if(sign == "divide"){
    return (`${num1} / ${num2} = ${num1 / num2}`);
  }
};

var operation = (sign, num1, num2) => {
  if(sign == "add"){
    return (`${num1} + ${num2} = ${num1 + num2}`);
  }
  else if(sign == "subtract"){
    return (`${num1} - ${num2} = ${num1 - num2}`);
  }
  else if(sign == "multiply"){
    return (`${num1} * ${num2} = ${num1 * num2}`);
  }
  else if(sign == "divide"){
    return (`${num1} / ${num2} = ${num1 / num2}`);
  }
};

operation("add",5,4);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function comperison(num1,num2){
  if(num1>num2){
    return (`${num1} is larger than ${num2}`)
  } else {
    return (`${num2} is larger than ${num1}`)
  }
}

var comperison = function(num1, num2) {
  if(num1>num2){
    return (`${num1} is larger than ${num2}`)
  } else {
    return (`${num2} is larger than ${num1}`)
  }
};

var comperison = (num1,num2) => {
  if(num1>num2){
    return (`${num1} is larger than ${num2}`)
  } else {
    return (`${num2} is larger than ${num1}`)
  }
};

var comperison = (num1,num2) => (num1>num2) ? (`${num1} is larger than ${num2}`) : (`${num2} is larger than ${num1}`);

comperison(5,6);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function comperison(num1,num2){
  if(num1>num2){
    return (`${num1} is larger than ${num2}`);
  } else {
    return (`${num2} is larger than ${num1}`);
  }
}

var comperison = function(num1, num2) {
  if(num1>num2){
    return (`${num1} is larger than ${num2}`);
  } else {
    return (`${num2} is larger than ${num1}`);
  }
};

var comperison = (num1,num2) => {
  if(num1>num2){
    return (`${num1} is larger than ${num2}`);
  } else {
    return (`${num2} is larger than ${num1}`);
  }
};

var comperison = (num1,num2) => (num1>num2) ? (`${num1} is larger than ${num2}`) : (`${num2} is larger than ${num1}`);

comperison(5,6);


 
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function comperison(num1,num2){
  if(num1 == num2){
    return (`the numbers are equal`);
  } else {
    return (`the numbers are not equal`)
  }
}

var comperison = function(num1,num2){
  if(num1 == num2){
    return (`the numbers are equal`);
  } else {
    return (`the numbers are not equal`)
  }
};

var comperison = (num1,num2) =>{
  if(num1 == num2){
    return (`the numbers are equal`);
  } else {
    return (`the numbers are not equal`)
  }
};

var comperison = (num1,num2) => (num1 == num2) ? (`the numbers are equal`) : (`the numbers are not equal`);

comperison(5,5);


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function small(num1,num2){
  if(num1 > num2){
    return (`${num2}is the smallest number`);
  } else {
    return (`${num1}is the smallest number`);
  }
}

var small = function(num1,num2){
  if(num1 > num2){
    return (`${num2}is the smallest number`);
  } else {
    return (`${num1}is the smallest number`);
  }
};

var small = (num1,num2) => (num1 > num2) ? (`${num2}is the smallest number`) : (`${num1}is the smallest number`);

var small = (num1,num2) => {
  if(num1 > num2){
    return (`${num2}is the smallest number`);
  } else {
    return (`${num1}is the smallest number`);
  }
};

small(4,5);


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function large(num1,num2){
  if(num1 > num2){
    return (`${num1}is the largest number`);
  } else {
    return (`${num2}is the largest number`);
  }
}

var large = function(num1,num2){
  if(num1 > num2){
    return (`${num1}is the largest number`);
  } else {
    return (`${num2}is the largest number`);
  }
};

var large = (num1,num2) => {
  if(num1 > num2){
    return (`${num1}is the largest number`);
  } else {
    return (`${num2}is the largest number`);
  }
};

var large = (num1,num2) => (num1 > num2) ? (`${num1}is the largest number`) : (`${num2}is the largest number`);

large(5,10);




/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(num1){
  if(num1%2==0){
    return (`${num1} is even number`);
  }else {
    return (`${num1} is not even number`);
  }
}

var isEven = function(num1){
  if(num1%2==0){
    return (`${num1} is even number`);
  }else {
    return (`${num1} is not even number`);
  }
};

var isEven = (num1) => {
  if(num1%2==0){
    return (`${num1} is even number`);
  }else {
    return (`${num1} is not even number`);
  }
};

var isEven = (num1) => (num1%2==0) ? (`${num1} is even number`) : (`${num1} is not even number`);
 
isEven(7);




/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(num1){
  if(num1%2!=0){
    return (`${num1} is odd number`);
    return (`${num1} is not odd number`);
  }
}

var isOdd = function(num1){
  if(num1%2!=0){
    return (`${num1} is odd number`);
    return (`${num1} is not odd number`);
  }
}

var isOdd = (num1) => (num1%2!=0) ? (`${num1} is odd number`) : (`${num1} is not odd number`);

var isOdd = (num1) => {
  if(num1%2!=0){
    return (`${num1} is odd number`);
    return (`${num1} is not odd number`);
  }
}

isOdd(5);



/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function grade(score,total){
  var percent = (score/total)*100;
  if(percent>=90){
    return "A";
  }
  else if(percent>=80){
    return "B";
  }
  else if(percent>=70){
    return "C";
  }
  else if(percent>=60){
    return "D";
  }
  else if(percent<=59){
    return "F";
  }
}

var grade = function(score,total){
  var percent = (score/total)*100;
  if(percent>=90){
    return "A";
  }
  else if(percent>=80){
    return "B";
  }
  else if(percent>=70){
    return "C";
  }
  else if(percent>=60){
    return "D";
  }
  else if(percent<=59){
    return "F";
  }
};

var grade = (score,total) => {
  var percent = (score/total)*100;
  if(percent>=90){
    return "A";
  }
  else if(percent>=80){
    return "B";
  }
  else if(percent>=70){
    return "C";
  }
  else if(percent>=60){
    return "D";
  }
  else if(percent<=59){
    return "F";
  }
};

grade(95,100);



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function join(word1,word2){
  return(`${word1} ${word2}`);
}
join("an","kit");

var join = function(word1,word2) {
  return(`${word1} ${word2}`);
}

var join = (word1,word2) => (`${word1} ${word2}`);

var join = (word1,word2) => {
  return(`${word1} ${word2}`);
}
join("an","kit");