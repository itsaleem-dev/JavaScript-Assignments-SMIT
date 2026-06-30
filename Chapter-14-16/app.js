// Q1: Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];


// Q2: Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array();


// Q3: Declare and initialize a strings array.
var fruits = ["apple", "banana", "mango"];


// Q4: Declare and initialize a numbers array.
var scores = [85, 92, 78, 90];


// Q5: Declare and initialize a boolean array.
var boolArray = [true, false, true, false];


// Q6: Declare and initialize a mixed array.
var mixedArray = ["Sohail", 25, true, "Karachi"];


// 7: Declare and Initialize an array and store available education qualifications in Pakistan. Show the listed qualifications in your browser.
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.writeln("<h1>Qualifications:</h1>");

for (var i = 0; i < qualifications.length; i++) {
    document.writeln((i + 1) + ") " + qualifications[i] + "<br>");
}


// Q8: Write a program to store 3 student names and their scores. Assume total marks are 500 for each student, display the scores & percentages.
var students = ["Michael", "John", "Tony"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < students.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    document.writeln("<br>" + "Score of " + students[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}


// Q9: Initialize an array with color names. Ask the user what color he/she wants to add to the beginning & end, etc.
var colors = ["Red", "Green", "Blue"];
document.writeln("<br>" + "Initial Colors: " + colors + "<br>");

// a. Add to beginning
var colorStart = prompt("Kaunsa color beginning me add karna chahte ho?");
colors.unshift(colorStart);

// b. Add to end
var colorEnd = prompt("Kaunsa color end me add karna chahte ho?");
colors.push(colorEnd);

document.writeln("Updated Colors: " + colors);


// Q10: Write a program to store student scores in an array & sort the array in ascending order.
var studentScores = [320, 230, 480, 120];
document.writeln("<br>" + "<br>" + "Scores of Students: " + studentScores + "<br>");

studentScores.sort(function (a, b) { return a - b });
document.writeln("Ordered Scores of Students: " + studentScores);


// Q11: Initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.writeln("<br>" + "<br>" + "Cities list: " + "<br>" + cities + "<br>");
document.writeln("<br>" + "Selected cities list: " + "<br>" + selectedCities);


// Q12: Write a program to create a single string from the below mentioned array: var arr = ["This ", " is ", " my ", " cat"];
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");

document.writeln("<br>" + "<br>" + "Array: " + arr + "<br>");
document.writeln("String: " + singleString);


// Q13: Create a new array. Store values one by one (FIFO-First In First Out).
var devices = ["keyboard", "mouse", "printer", "monitor"];

document.writeln("Devices: " + devices + "<br><br>");

for (var i = 0; i < devices.length; i++) {
    document.writeln("<br>" + "Out: " + devices[i] + "<br>");
}


// Q14: Create a new array. Store values one by one and access in reverse order (LIFO-Last In First Out).
var devicesLIFO = ["keyboard", "mouse", "printer", "monitor"];

document.writeln("Devices: " + devicesLIFO + "<br><br>");

for (var i = devicesLIFO.length - 1; i >= 0; i--) {
    document.writeln("Out: " + devicesLIFO[i] + "<br>");
}
