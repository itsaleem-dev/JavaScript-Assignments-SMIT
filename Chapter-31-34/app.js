//Q1 Write a program that displays current date and time in your browser.

var currentDate = new Date();
document.writeln(currentDate + "<br>" + "<br>");


//Q2 Write a program that alerts the current month in words. For example December.

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var currentMonth = monthNames[now.getMonth()];

alert("Current month: " + currentMonth);



//Q3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var currentDay = dayNames[now.getDay()];

alert("Today is " + currentDay);




//Q4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var now = new Date();
var dayIndex = now.getDay();

if (dayIndex === 0 || dayIndex === 6) {
    document.writeln("It's Fun day" + "<br>" + "<br>");
}


//Q5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var today = new Date();
var date = today.getDate();

if (date < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}



//Q6 Write a program that determines the minutes since midnight, Jan. 1, 1970.

var currentDate = new Date();
var milliseconds = currentDate.getTime();
var minutes = milliseconds / (1000 * 60);

document.write("Current Date: " + currentDate + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + milliseconds + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>" + "<br>");



//Q7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var now = new Date();
var hours = now.getHours();

if (hours < 12) {
    alert("Its AM");
} else {
    alert("Its PM");
}



//Q8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("December 31, 2020");

document.write("Later date: " + laterDate + "<br>" + "<br>");




//Q9 Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015.

var ramadanStart = new Date("June 18, 2015");
var today = new Date();

var diffInMs = today.getTime() - ramadanStart.getTime();
var daysPassed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

alert(daysPassed + " days have passed since 1st Ramadan, 2015");





//Q10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var referenceDate = new Date();
var startOf2015 = new Date("January 1, 2015");

var diffInMs = referenceDate.getTime() - startOf2015.getTime();
var secondsPassed = Math.floor(diffInMs / 1000);

document.write("On reference date " + referenceDate + ", <br>");
document.write(secondsPassed + " seconds had passed since beginning of 2015" + "<br>" + "<br>");




//Q11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object.

var d = new Date();
document.write("current date: " + d + "<br>");

var hours = d.getHours();
d.setHours(hours + 1);

document.write("1 hour ahead, it will be: " + d + "<br>" + "<br>");




//Q12 Write a program that creates a date object and show the date 100 years back in an alert box.

var d = new Date();
var currentYear = d.getFullYear();
d.setFullYear(currentYear - 100);

alert("100 years back, it was: " + d);




//Q13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

document.write("Your age is " + age + "<br>");
document.write("Your birth year is " + birthYear);




//Q14 Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.

var customerName = "ABC Customer";
var currentMonth = "February";
var numberOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmount = numberOfUnits * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

document.writeln("<h1>K-Electric Bill</h1>");
document.writeln("Customer Name: <b>" + customerName + "</b><br>");
document.writeln("Month: <b>" + currentMonth + "</b><br>");
document.writeln("Number of units: <b>" + numberOfUnits + "</b><br>");
document.writeln("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>");

document.writeln("Net Amount Payable (within Due Date): <b>" + netAmount.toFixed(2) + "</b><br>");
document.writeln("Late payment surcharge: <b>" + latePaymentSurcharge.toFixed(2) + "</b><br>");
document.writeln("Gross Amount Payable (after Due Date): <b>" + grossAmount.toFixed(2) + "</b>");