"use strict";

console.log("Hello World!");
console.log("Hello Polaris!");

alert("Welcome to my Website!");

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false

var userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
var message = "Great, " + userInput + " is my favorite color too!"
alert(message);

console.log("Hello from External JavaScript")

alert('The price for the movies is: ' + (3 * 5 * 1) * 3);

alert('I will receive: ' + ((400 * 6) + (380 * 4) + (350 * 10)));

var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict?");
alert("You can enroll in class:" + (!full && !conflict));