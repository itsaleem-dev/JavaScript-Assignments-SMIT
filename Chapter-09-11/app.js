// Q1: Write a program to take "city" name as input from user. If user enters "Karachi", welcome the user: "Welcome to city of lights".
var city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


// Q2: Write a program to take "gender" as input. If male, "Good Morning Sir"; if female, "Good Morning Ma'am"
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}


// Q3: Take input color of road traffic signal and show message according to the table (Red: Must Stop, Yellow: Ready to move, Green: Move now).
var signalColor = prompt("Enter traffic signal color (Red/Yellow/Green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}


// Q4: Take input remaining fuel in car. If less than 0.25 litres, show "Please refill the fuel in your car".
var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// Q5: Script Check
// Run the given scripts and check if alerts are displayed.
// Solution:

// a: var a = 4; if (++a === 5) { alert("true"); } -> Alert chalega (a 5 ho jayega).
// b: var b = 82; if (b++ === 83) { alert("true"); } -> Alert nahi chalega (check 82 pe hoga).
// c: Isme multiple conditions hain; alert tabhi chalega agar condition match karegi.


// Q6 Take marks obtained in 3 subjects and total marks. Calculate percentage and show Grade/Remarks.
var totalMarks = 300;
var sub1 = parseFloat(prompt("Marks in Subject 1:"));
var sub2 = parseFloat(prompt("Marks in Subject 2:"));
var sub3 = parseFloat(prompt("Marks in Subject 3:"));
var obtained = sub1 + sub2 + sub3;
var perc = (obtained / totalMarks) * 100;
var grade, remarks;

if (perc >= 80) { grade = "A-one"; remarks = "Excellent"; }
else if (perc >= 70) { grade = "A"; remarks = "Good"; }
else if (perc >= 60) { grade = "B"; remarks = "You need to improve"; }
else { grade = "Fail"; remarks = "Sorry"; }

document.writeln("<h1>Marks Sheet</h1>");
document.writeln("Total marks: " + totalMarks + "<br>Marks obtained: " + obtained + "<br>Percentage: " + perc + "%<br>Grade: " + grade + "<br>Remarks: " + remarks);


// Q7 Secret number (1-10). If match: "Bingo!". If guess+1: "Close enough".
var secretNum = 7;
var guess = parseInt(prompt("Guess the secret number (1-10):"));
if (guess === secretNum) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNum || guess - 1 === secretNum) {
    alert("Close enough to the correct answer");
}


// Q8: Divisible by 3 Check if number is divisible by 3.
var num = parseInt(prompt("Enter a number:"));
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}


// Q9: Even or Odd Check if input is even or odd.
var num = parseInt(prompt("Enter number to check Even/Odd:"));
if (num % 2 === 0) { alert("It is an Even number"); }
else { alert("It is an Odd number"); }


// Q10: Temperature Message Show message based on temperature (T > 40: "Too hot", T > 30: "Normal", T > 20: "Cool", T > 10: "OMG").
var temp = parseInt(prompt("Enter Temperature:"));
if (temp > 40) {
    alert("It is too hot outside.");
}
else if (temp > 30) {
    alert("The Weather today is Normal.");
}
else if (temp > 20) {
    alert("Today's Weather is cool.");
}
else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}


// Q11: Calculator Take two numbers and an operator (+, -, *, /, %) and calculate result.
var fNum = parseFloat(prompt("First Number:"));
var sNum = parseFloat(prompt("Second Number:"));
var op = prompt("Operation (+, -, *, /, %):");

if (op === "+") { alert(fNum + sNum); }
else if (op === "-") { alert(fNum - sNum); }
else if (op === "*") { alert(fNum * sNum); }
else if (op === "/") { alert(fNum / sNum); }
else if (op === "%") { alert(fNum % sNum); }