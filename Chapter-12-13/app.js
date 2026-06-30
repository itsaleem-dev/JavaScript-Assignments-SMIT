// Q1: Character Type Check Write a program that takes a character (number or string) and checks whether the given input is a number, uppercase letter or lower case letter.
var ch = prompt("Enter a character (Number or Letter):");
var index = ch.charCodeAt(0);

if (index >= 48 && index <= 57) {
    alert("The input is a Number.");
} else if (index >= 65 && index <= 90) {
    alert("The input is an Uppercase Letter.");
} else if (index >= 97 && index <= 122) {
    alert("The input is a Lowercase Letter.");
} else {
    alert("Special character or invalid input.");
}


// Q2: Larger Integer Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1 = parseInt(prompt("Enter first integer:"));
var num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    alert("The larger number is: " + num1);
} else if (num2 > num1) {
    alert("The larger number is: " + num2);
} else {
    alert("Both integers are equal.");
}


// Q3: Positive, Negative or Zero Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is Positive.");
} else if (num < 0) {
    alert("The number is Negative.");
} else {
    alert("The number is Zero.");
}


// Q4: Vowel Check Write a program that takes a character (string of length 1) and returns true if it is a vowel, false otherwise.
var char = prompt("Enter a single character:").toLowerCase();
var isVowel = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');

alert("Is it a vowel? " + isVowel);


// Q5: Password Validation Write a program that stores a correct password, asks user for their password, and validates it.
var correctPass = "mySecurePassword123";
var userPass = prompt("Please enter your password:");

if (!userPass) {
    alert("Please enter your password");
} else if (userPass === correctPass) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}


// Q6: Fix the Script This if/else statement does not work. Try to fix it.

//Original (Broken):
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }

// Fixed Solution:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}



// Q7: 24-Hour Clock Write a program that takes time as input in 24-hour format (e.g., 1900) and shows a greeting using if, else if, and else.
var time = parseInt(prompt("Enter time in 24-hour format (e.g. 1900 for 7pm):"));

if (time >= 1 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time format.");
}




