// Q1: Declare and initialize an empty multidimensional array. (Array of arrays)
var multiArray = [[], [], []];


// Q2: Declare and initialize a multidimensional array representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < matrix.length; i++) {
    document.writeln("<br>" + matrix[i] + "<br>" + "<br>");
}


// Q3: Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
    document.writeln(i + "<br>");
}


// Q4: Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
var tableNum = parseInt(prompt("Enter a number to show its multiplication table:"));
var tableLength = parseInt(prompt("Enter length of multiplication table:"));

document.writeln("<br>" + "Multiplication table of " + tableNum + "<br>");
document.writeln("Length " + tableLength + "<br><br>");

for (var i = 1; i <= tableLength; i++) {
    document.writeln("<br>" + tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}


// Q5: Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.writeln("<br>" + fruits[i] + "<br>");
}

document.writeln("<br>");

for (var j = 0; j < fruits.length; j++) {
    document.writeln("Element at index " + j + " is " + fruits[j] + "<br>" + "<br>");
}


// Q6: Generate the following series in your browser. See example output.
// a. Counting: 1 to 15
// b. Reverse counting: 10 to 1
// c. Even: 0 to 20
// d. Odd: 1 to 19
// e. Series: 2k to 20k
// Counting 1 to 15

document.writeln("<b>Counting:</b> ");
for (var i = 1; i <= 15; i++) {
    document.writeln(i + (i < 15 ? ", " : ""));
}
document.writeln("<br>");

// Reverse counting 10 to 1
document.writeln("<b>Reverse counting:</b> ");
for (var i = 10; i >= 1; i--) {
    document.writeln(i + (i > 1 ? ", " : ""));
}
document.writeln("<br>");

// Even numbers 0 to 20
document.writeln("<b>Even:</b> ");
for (var i = 0; i <= 20; i += 2) {
    document.writeln(i + (i < 20 ? ", " : ""));
}
document.writeln("<br>");

// Odd numbers 1 to 19
document.writeln("<b>Odd:</b> ");
for (var i = 1; i < 20; i += 2) {
    document.writeln(i + (i < 19 ? ", " : ""));
}
document.writeln("<br>");

// Series 2k, 4k, ..., 20k
document.writeln("<b>Series:</b> ");
for (var i = 2; i <= 20; i += 2) {
    document.writeln(i + "k" + (i < 20 ? ", " : ""));
}


// Q7: You have an array A = ["cake", "apple pie", "cookie", "chips", "patties"]. Write a program to enable "search by user input" in an array. After searching, prompt the user whether the given item is found in the list or not.
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var found = false;
var index = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        found = true;
        index = i;
        break;
    }
}

if (found) {
    document.writeln("<br>" + "<br>" + userInput + " is <b>available</b> at index " + index + " in our bakery.");
} else {
    document.writeln("<br>" + "<br>" + "We are sorry. " + userInput + " is <b>not available</b> in our bakery.");
}


// Q8: Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.writeln("<br>" + "<br>" + "Array items: " + A + "<br>");
document.writeln("The largest number is " + largest);


// Q9: Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
document.writeln("<br>" + "<br>" + "Array items: " + A + "<br>");
document.writeln("The smallest number is " + smallest);


// Q10: Write a program to print multiples of 5 ranging 1 to 100.
var multiples = [];
for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        multiples.push(i);
    }
}
document.writeln("<br>" + "<br>" + multiples);