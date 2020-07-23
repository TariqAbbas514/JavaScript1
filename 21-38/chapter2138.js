// // chapter26-30 Maths Methods
// // Task1
var num = prompt("Enter your fractional number");
document.write("number: " +Number(num));document.write("<br>");
document.write("round off value: " +Math.round(num));document.write("<br>");
document.write("floor value: " +Math.floor(num));document.write("<br>");
document.write("ceil value: " +Math.ceil(num));document.write("<br>");
document.write("<br><br>");

// // Task2
 var num = prompt("Enter your negative fractional number");
 document.write("number: " +Number(num));document.write("<br>");
document.write("round off value: " +Math.round(num));document.write("<br>");
document.write("floor value: " +Math.floor(num));document.write("<br>");
document.write("ceil value: " +Math.ceil(num));document.write("<br>");
document.write("<br><br>");

//Task3
var absoluteVal = prompt("Enter your negative or ositive number");
document.write("The absolute value of " +absoluteVal+ " is " +Math.abs(absoluteVal));

// Task4
var number1 = Math.random();
var number2 = Math.random();
var diceNumber1 = number1*6+1;
var diceNumber2 = number2*6+1;
document.write("random dice value: " +Math.floor(diceNumber1));document.write("<br>");
document.write("random dice value: " +Math.floor(diceNumber2));document.write("<br><br>");

//Task5              
 var coinVal = Math.random();
var coinValue = Math.floor(coinVal*2+1);
if(coinValue === 2){
	document.write("2");document.write("<br>");
	document.write("random coin value: Heads" );
}else{
	document.write("1");document.write("<br>");
	document.write("random coin value: Tails" );
}

document.write("<br><br>");

//Task6              
 var randomNum = Math.random();
var ranNum = Math.floor(randomNum*98+2);
	document.write("random number between 1 and 100: " +ranNum);
document.write("<br><br>");

//TAsk7
var weight = prompt("Enter your weight in kilograms", 50);
var userWeight = weight.slice(0,2);
	document.write("The weight of user is " +userWeight+ " kilograms");
document.write("<br><br>");

// Task8
var userInput = prompt("Enter a number between 1 and 10");
var randomNumber = Math.random();
var ran = Math.floor(randomNumber*8+2);
if(userInput === ran ){
document.write("Hi, Congratulations to win a secret game");
}
document.write("<br><br>");

// chapter21-25

// Task9
var str = "472";
document.write("Value: " +parseInt(str));document.write("<br>");
document.write("Type: string");document.write("<br>");
var num1 = 472;
document.write("Value: " +num1.toString());document.write("<br>");
document.write("Type: number");document.write("<br><br>");

// Task8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var afterMessage = message.replace(/and/g, "&");
document.write(afterMessage);
document.write("<br><br>");

// Task7
var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam");
document.write("City: " +city);document.write("<br>");
document.write("After replacement: " +replaceCity);document.write("<br><br>");

//Task5
var string = "Pakistani";
document.write("String: " +string);document.write("<br>");
document.write("Character at index 3: " +string[3]);document.write("<br><br>");

//Task4
var string = "Hello World";
document.write("String: " +string);document.write("<br>");
document.write("Last index of 'l': " +string.lastIndexOf("l"));document.write("<br><br>");

// Task3
var string = "Pakistani";
document.write("String: " +string);document.write("<br>");
document.write("Index of 'n': " +string.indexOf("n"));document.write("<br><br>");

// Task2
var string = prompt("Your favorite Mobile phone:");
document.write("My favorite phone is: " +string);document.write("<br>");
document.write("Length of string: " +string.length);document.write("<br><br>");

// Task1
var firstname = +prompt("Enter First Name:");
var lastname = +prompt("Enter Last Name:");
var fullName = firstname + " " + lastname;
document.write("Hello, " +fullName);
document.write("<br><br>");
// Task6
//  document.write(concat(firstname, lastname));document.write("<br><br>");
// var res = firstname.concat(lastname);
// document.write(res);
// document.write("<br><br>");

// Task10
var input = prompt("Enter any word");
document.write("User input: " +input);document.write("<br>");
document.write("Upper case: " +input.toUpperCase());document.write("<br><br>");

// Task17
var string = prompt("Enter any input words");
document.write("User input: " +string);document.write("<br>");
document.write("Last character of input: " +string.charAt(string.length - 1));document.write("<br><br>");

// Task16
var university = "University of Karachi";
document.write(university.split("").join(" <br>"));
document.write("<br><br>");

// Task11
var input = prompt("Enter any word as an input: ","javascript");
document.write("User input: " +input);document.write("<br>");
var firstLetter = input.slice(0, 1).toUpperCase();
var allLetter = input.slice(1).toLowerCase();
var output = firstLetter + allLetter;
document.write("Title case: " +output);
document.write("<br><br>");

// Task12
var num = 35.36;
var str = num.toString();
var arr1 = str.slice(0,2);
var arr2 = str.slice(3);
var allArray = arr1 + arr2;
document.write("Number: " +num);document.write("<br>");
document.write("Result: " +allArray);
document.write("<br><br>");

//Chapter 31-34
// Task1
var rightNow = new Date();
document.write(rightNow);
document.write("<br><br>");

// Task2
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = new Date();
 var theMonth = m.getMonth();
 var currentMonth = monthNames[theMonth];
document.write("Current month: " +currentMonth);
document.write("<br><br>");

//Task3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("Today is " +nameOfToday);
document.write("<br><br>");

// Task4
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var now = new Date();
var theDay = now.getDay();
// var dayOfToday = dayNames[theDay];
// document.write(dayOfToday);
if(theDay === 0){
	document.write("It&#39;s Fun day");
}else if(theDay === 6){
	document.write("It&#39;s Fun day");
}
document.write("<br><br>");

// Task5
var now = new Date();
var dayOfMonth = now.getDate();
if(dayOfMonth < 16){
	document.write("First fifteen days of the month");
}else{
	document.write("Last days of the month");
}
document.write("<br><br>");

// Task6
var millsSince = now.getTime();
document.write("Current Date: " +now);document.write("<br>");
document.write("Elapsed milliseconds since January 1, 1970: " +millsSince);document.write("<br>");
document.write("Elapsed minutes since January 1, 1970: " +millsSince/1000/60);document.write("<br>");
document.write("<br><br>");

// Task7
var now = new Date();
var timeOfDay = now.getHours();
if(timeOfDay < 11){
	document.write("Its AM");
}else{
	document.write("Its PM");
}
document.write("<br><br>");

// Task8
var laterDate = new Date(2020, 11, 31, 0, 0, 0, 4);
document.write(laterDate);
document.write("<br><br>");

// Task13
var age = prompt("Enter your age:");
var currentYear = 2020;
var birthYear = currentYear - age;
document.write(birthYear);
document.write("<br><br>");

// Task12
var d = new Date();
document.write("current date: " +d);document.write("<br>");
var pastYear = d.getFullYear() - 100;
var d2 = d.setFullYear(pastYear);
document.write("100 years back, it was " +d);
document.write("<br><br>");

// Task11
var d = new Date();
document.write("current date: " +d);document.write("<br>");
var pastHour = d.getHours() - 1;
var d2 = d.setHours(pastHour);
document.write("1 hour ago, it was " +d);
document.write("<br><br>");

// chapter35-38
// Task1
function currentDate(){
	var now = new Date();
	document.write(now);
}
currentDate();
document.write("<br><br>");

// Task2
function userGreeting(){
 var firstname = prompt("Enter First Name:");
var lastname = prompt("Enter Last Name:");
var fullName = firstname+ " " + lastname;
document.write("Welcome, " +fullName+ ". Thank you for joing us");
}
userGreeting();
document.write("<br><br>");

// Task3
function sum(){
 var firstNumber = prompt("Enter first number:");
var secondNumber = prompt("Enter second number:");
var num1 = parseInt(firstNumber);
var num2 = parseInt(secondNumber);
var sum = num1 + num2;
document.write(sum);
}
sum();
document.write("<br><br>");

// Task5
function square(x){
	var x = prompt("Enter your number");
document.write(x*x);
}
square();
document.write("<br><br>");

 var str = prompt("Enter some words");
var slc = str.slice(0, 1).toUpperCase();
var slc2 = str.slice(1).toLowerCase();
var output = slc + slc2;
document.write(output);
document.write("<br><br>");

//Task6
// function fact(){
// var num = prompt("Type any number");
// var n = parseInt(num);
// for (var i = n - 1; i >= 1; i--){
// var fac = document.write(n*i);
// parseInt(fac);
// }
// }
//  fact();

// Task7
function counting(){
var start = parseInt(prompt("Enter start number"));
var end = parseInt(prompt("Enter end number"));
for (var i = start; i <= end; i++){
	document.write(i+ "<br>");
}
}
counting();


// Task9
function triangleArea(width, height){
	var width = prompt("Enter width of triangle:");
	var height = prompt("Enter height of triangle:");
	var Area = width*height;
	document.write(Area);
}
triangleArea();