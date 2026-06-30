// Q1: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser.
var a = 10;
document.writeln("Result:<br>");
document.writeln("The value of a is: " + a + "<br>");
document.writeln("...........................................<br><br>");

document.writeln("The value of ++a is: " + (++a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of a++ is: " + (a++) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of --a is: " + (--a) + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of a-- is: " + (a--) + "<br>");
document.writeln("Now the value of a is: " + a + "<br>");


// Q2: What will be the output in variables a, b & result after execution of the following script? Explain the output at each stage.
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.writeln("<br>" + "a is " + a + "<br>")
document.writeln("b is " + b)
document.writeln("<br>" + "result is " + result)


// Q3: Write a program that takes input a name from user & greet the user.
var name = prompt("Please enter your name:");
alert("Hello " + name + "! Welcome to our page.");


// Q4 & Q5: Write a program to take input a number from user & display its multiplication table. If no number is entered, table of 5 should be displayed by default.
var num = prompt("Enter a number for multiplication table:", 5);
num = Number(num);

document.writeln("<h2>Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.writeln(num + " x " + i + " = " + (num * i) + "<br>");
}


// Q6: Take 3 subjects name, their total marks (100 each), and obtained marks from user. Calculate total marks and percentage.
// a) Take subjects
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

// b) Total marks
var totalEach = 100;

// c, d) Obtained marks
var marks1 = Number(prompt("Enter marks for " + sub1));
var marks2 = Number(prompt("Enter marks for " + sub2));
var marks3 = Number(prompt("Enter marks for " + sub3));

// e) Calculations
var totalObtained = marks1 + marks2 + marks3;
var totalMax = totalEach * 3;
var percentage = (totalObtained / totalMax) * 100;

// Result in table format
document.writeln("<table>");
document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.writeln("<tr><td>" + sub1 + "</td><td>" + totalEach + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.writeln("<tr><td>" + sub2 + "</td><td>" + totalEach + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.writeln("<tr><td>" + sub3 + "</td><td>" + totalEach + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
document.writeln("<tr><th>Total</th><th>" + totalMax + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.writeln("</table>");

