1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here

function calculateDogAge(puppyAge){
  var dogAge = puppyAge/7;
  alert(`Your doggie is ${dogAge} years old in dog years!`);
  // return dogAge;
}

function calculateHumanAge(dogAge){
  var humanAge = (dogAge * 7);
  alert(`Your age is ${humanAge} years old in ${dogAge} dog years!`);
}
calculateDogAge(2);
calculateHumanAge(3);


2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here

function calculateSupply(age, amountPerDay){
  const maxAge = 90;
  var amount = (maxAge-age)*amountPerDay;
  amount = Math.round(amount);
  alert(`You will need ${amount} to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(50,10);



3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js
// your code goes here

function celsiusToFahrenheit(){
  var celTemp = 40;
  var fahTemp = (celTemp*(9/5))+32;
  alert(` ${celTemp}'C is ${fahTemp}'F`);
}
function fahrenheitToCelsius(){
  var fahTemp = 40;
  var celTemp = (fahTemp-32)*(5/9);
  alert(` ${fahTemp}'F is ${celTemp}'C`);
}
celsiusToFahrenheit();
fahrenheitToCelsius();


4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
  var age = 5;
  var checkAge = (age>18) ? alert(true) : confirm("Did parents allow you?");


  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here

  var age = 5;
  return(age>18) || confirm("Did parents allow you?");---------------------------------
  


Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
checkAge(21);
```
Is there any difference in the behavior of these two variants? If there is what is that?
 Yes there is difference as if there is no else than return statement always return value regardless of if(condition) true / false, But if we use return in else than it will only return if if(condition) is false.



5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
// Your code goes here

var x = Number( prompt("enter a number.") );
var n = Number( prompt("enter the pow.") );
function pow(x,n){
  if(x>1){
  var result = Math.pow(x,n);
  alert(result);
  }else {
  alert("enter first number as positive integer")
}
}
pow(x,n);
pow(3, 2);


// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.


var num = Number(prompt("enter a number"));
var ask = prompt("What Operation you want to perform.? enter sum or product");
if(ask == "sum"){
  var sum = 0;
  for(var i = 1; i<num+1; i++){
     sum += i;
  }
  alert(sum);
}else if(ask == "product"){
  var pro = 1;
  for(var i = 1; i<num+1; i++){
     pro *= i;
  }
  alert(pro);
} else {
  alert("enter correct operation");
}


6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

var num = Number(prompt("enter a number"));
  var sum = 0;
  for(var i = 1; i<num+1; i++){
     sum += i;
  }
  alert(sum);



7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

var num = Number(prompt("enter a number"));
  var sum = 0;
  for(var i = 1; i<num+1; i++){
    if( (i%5 == 0) || (i%7 == 0) )
     sum += i;
  }
  alert(sum);

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

function min(num1, num2){
  var result = (num1>num2) ? num2 : num1;
  console.log(result);
}
min(5,7);


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```