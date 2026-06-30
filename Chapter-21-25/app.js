//Q1: Write a program that takes two user inputs for first and last name using prompt and 
// merge them in a new variable titled fullName. Greet the user using his full name.

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const fullName = firstName + " " + lastName;

document.writeln("Hello, " + fullName + "!" + "<br>" + "<br>");




//Q2: Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

let favoritePhone = prompt("Enter your favorite mobile phone model:");
let inputLength = favoritePhone.length;

document.writeln("My favorite phone is: " + favoritePhone + "<br>");
document.writeln("Length of string: " + inputLength + "<br>" + "<br>");



//Q3: Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

let word = "Pakistan";
let indexNum = word.indexOf("n");

document.writeln("String: " + word + "<br>");
document.writeln("Index of 'n': " + indexNum + "<br>" + "<br>");



//Q4: Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

let text = "Hello World";
let lastIndexNum = text.lastIndexOf("l");

document.writeln("String: " + text + "<br>");
document.writeln("Last index of 'l': " + lastIndexNum + "<br>" + "<br>");



//Q5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

let word1 = "Pakistani";
let charAtThree = word.charAt(3);

document.writeln("String: " + word1 + "<br>");
document.writeln("Character at index 3: " + charAtThree + "<br>" + "<br>");



//Q6 Repeat Q1 using string concat() method.

// User se input lena
let firstName1 = prompt("Enter your first name:");
let lastName1 = prompt("Enter your last name:");
let fullName1 = firstName1.concat(" ", lastName1);

alert("Hello, " + fullName1 + "!");



//Q7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.writeln("City: " + city + "<br>");
document.writeln("After replacement: " + newCity);



//Q8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMessage = message.replace(/and/g, "&");

// Browser mein display karna
document.writeln("Original Message: " + message + "<br>" + "<br>");
document.writeln("Updated Message: " + newMessage + "<br>" + "<br>");;



//Q9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

let stringValue = "472";
let type1 = typeof (stringValue);
let numberValue = Number(stringValue);
let type2 = typeof (numberValue);

document.writeln("Value: " + stringValue + "<br>");
document.writeln("Type: " + type1 + "<br>");
document.writeln("Value: " + numberValue + "<br>");
document.writeln("Type: " + type2 + "<br>" + "<br>");




//Q10 Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter some text:");
var upperCaseInput = userInput.toUpperCase();

document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCaseInput);



//Q11 Write a program that takes user input. Convert and show the input in title case.

var userInput = prompt("Enter some text:");
var firstChar = userInput.slice(0, 1).toUpperCase();
var otherChars = userInput.slice(1).toLowerCase();
var titleCaseInput = firstChar + otherChars;

document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCaseInput);




//Q12 Write a program that converts the variable num to string. var num = 35.36; Remove the dot to display “3536” display in your browser.

var num = 35.36;
var numString = num.toString();
var result = numString.replace(".", "");

document.write("Number: " + num + "<br>");
document.write("Result: " + result);



//Q13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.

let userName = prompt("Enter your username:");
let isValid = true;

for (let i = 0; i < userName.length; i++) {
    let charCode = userName.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username");
} else {
    alert("Username is valid: " + userName);
}





//Q14 You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program to enable 
// “search by user input” in an array. After searching, prompt the user whether the given item is found in the 
// list or not. (Case insensitive search).

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var searchItem = userInput.toLowerCase();
var isFound = false;
var indexNum1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
        isFound = true;
        indexNum1 = i;
        break;
    }
}

if (isFound) {
    alert(searchItem + " is available at index " + indexNum1 + " in our bakery.");
} else {
    alert("We are sorry. " + searchItem + " is not available in our bakery.");
}




//Q15 Write a program to take password as an input from user. The password must qualify these requirements:

// a. It should contain alphabets and numbers

// b. It should not start with a number

// c. It must at least 6 characters long


var password = prompt("Enter your password:");
var hasAlphabet = false;
var hasNumber = false;

if (password.length >= 6) {
    var firstChar = password.charCodeAt(0);
    if (firstChar >= 48 && firstChar <= 57) {
        alert("Password can not begin with a number. \nPlease enter a valid password");
    } else {
        for (var i = 0; i < password.length; i++) {
            var charCode = password.charCodeAt(i);
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasAlphabet = true;
            } else if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }
        if (hasAlphabet && hasNumber) {
            alert("Password is valid!");
        } else {
            alert("Password must contain both alphabets and numbers. \nPlease enter a valid password");
        }
    }
} else {
    alert("Password must be at least 6 characters long. \nPlease enter a valid password");
}




//Q16 Write a program to convert the following string to an array using string split method. Display the elements of array in your browser.

var university = "University of Karachi";
var res = university.split("");

for (var i = 0; i < res.length; i++) {
    document.write(res[i] + "<br>");
}




//Q17 Write a program to display the last character of a user input.

var userInput = prompt("Enter some text:");
var lastChar = userInput.charAt(userInput.length - 1);

document.write("User input: " + userInput + "<br>");
document.write("Last character of input: " + lastChar);




//Q18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var text1 = "The quick brown fox jumps over the lazy dog";
var lowerText = text1.toLowerCase();
var wordsArray = lowerText.split(" ");
var count = 0;

for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}

document.write("Text: " + text1 + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");