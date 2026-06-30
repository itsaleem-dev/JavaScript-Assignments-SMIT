// Q1: Declare a variable called age & assign to it your age.Show your age in an alert box.
var age = 15;
alert("I am " + age + " years old");

// Q2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show the number of visits on your web page.
// Maan lijiye visitor 14th time aaya hai
var visitCount = 14;
alert("You have visited this site " + visitCount + " times");

// Q3: Declare a variable called birthYear & assign to it your birth year.Show the following message in your browser.
var birthYear = 1990;
document.writeln("My birth year is " + birthYear + "<br>");
document.writeln("Data type of my declared variable is " + typeof (birthYear));

// Q4: A visitor visits an online clothing store.Store the following information in variables: 
// a. Visitor's name 
// b. Product title
// c. Quantity Display the message: "John Doe ordered 5 T-shirt(s) on XYZ Clothing store".
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.writeln("<br>" + "<br>" + visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");