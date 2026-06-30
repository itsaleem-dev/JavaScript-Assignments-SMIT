//Q1 Write a program that takes a positive integer from user & display the following in your browser.

// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let num = prompt("Enter a positive floating point number:");
num = Number(num);

document.writeln("number: " + num + "<br>");
document.writeln("round off value: " + Math.round(num) + "<br>");
document.writeln("floor value: " + Math.floor(num) + "<br>");
document.writeln("ceil value: " + Math.ceil(num) + "<br>" + "<br>");




//Q2 Write a program that takes a negative floating point number from user & display the following in your browser.

// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num1 = prompt("Enter a negative floating point number:");
num1 = Number(num);

document.writeln("number: " + num1 + "<br>");
document.writeln("round off value: " + Math.round(num1) + "<br>");
document.writeln("floor value: " + Math.floor(num1) + "<br>");
document.writeln("ceil value: " + Math.ceil(num1) + "<br>" + "<br>");



//Q3 Write a program that displays the absolute value of a number.(E.g. absolute value of -4 is 4 & absolute value of 5 is 5)

var num1 = prompt("Enter a number to find its absolute value:");
var absValue = Math.abs(num);

document.writeln("The absolute value of " + num1 + " is " + absValue + "<br>" + "<br>");



//Q4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

var diceValue = Math.floor(Math.random() * 6) + 1;

document.writeln("random dice value: " + diceValue + "<br>" + "<br>");



//Q5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

var toss = Math.floor(Math.random() * 2) + 1;

if (toss === 2) {
    document.writeln(toss + "<br>");
    document.writeln("random coin value: Heads" + "<br>" + "<br>");
} else {
    document.writeln(toss + "<br>" + "<br>" + "<br>");
    document.writeln("random coin value: Tails" + "<br>" + "<br>");
}



//Q6 Write a program that shows a random number between 1 and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;

document.writeln("random number between 1 and 100: " + randomNumber);




//Q7 Write a program that asks the user about his weight. Parse the user input and display his weight in your 
// browser. (Possible inputs: 50, 50kgs, 50.2kgs, 50.2kilograms)

var userInput = prompt("Enter your weight in kilograms");
var weight = parseFloat(userInput);

document.writeln("The weight of user is " + weight + " kilograms");



//Q8 Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Enter a number between 1 and 10");

if (Number(userGuess) === secretNum) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again! The secret number was " + secretNum);
}