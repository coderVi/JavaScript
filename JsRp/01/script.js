console.log("Hello, World!");
console.log("This is a sample JavaScript file.");

//Veriables
var a = 5000;
var b = 5500;
var c = 6000;
var d = 7000;

var kdv = 1.18;

console.log(a * kdv);
console.log(b * kdv);
console.log(c * kdv);
console.log(d * kdv);

//----------------

var productName = "Phone 17 Pro";
var productPrice = 100000;
var productDescription = "The latest smartphone with cutting-edge features.";

console.log("Product Name: " + productName);
console.log("Product Price: " + productPrice + " USD");
console.log("Product Description: " + productDescription);

//---------------

var student0Name = "Alice Johnson";
var student0NameDateOfBirth = 2012;
var student0MathScore0 = 95;
var student0MathScore1 = 88;
var student0MathScore2 = 92;
var student0AverageScore = (student0MathScore0 + student0MathScore1 + student0MathScore2) / 3;
var student0Status = (student0AverageScore >= 50);
var student0Age = 2024 - student0NameDateOfBirth;

var student1Name = "Bob Smith";
var student1NameDateOfBirth = 2010;
var student1MathScore0 = 85;
var student1MathScore1 = 30;
var student1MathScore2 = 28;
var student1AverageScore = (student1MathScore0 + student1MathScore1 + student1MathScore2) / 3;
var student1Status = (student1AverageScore >= 50);
var student1Age = 2024 - student1NameDateOfBirth;

console.log("Student 1: " + student0Name);
console.log("Age: " + student0Age);
console.log("Average Score: " + student0AverageScore);
console.log("Status: " + student0Status);
console.log("-----------------------");
console.log("Student 2: " + student1Name);
console.log("Age: " + student1Age);
console.log("Average Score: " + student1AverageScore);
console.log("Status: " + student1Status);

//---------------- String
var firstName = "John";
console.log(firstName[0]);

var lastName = "Doe";
var age = 30;
var city = "New York";
let message = "My name is " + firstName + " " + lastName + ", I am " + age + " years old and I live in " + city + ".";
console.log(message);

//Template String
var messageTemplate = `My name is ${firstName} ${lastName}, I am ${age} years old and I live in ${city}.`;
console.log(messageTemplate);

//String Methods
var CourseName = " JavaScript Full Course ";
var result;

result=CourseName.toUpperCase();
console.log(result);

result=CourseName.toLowerCase();
console.log(result);

result=CourseName.length;
console.log(result);

result=CourseName[6];
console.log(result);

result= CourseName.slice(0,10);
console.log(result);

result= CourseName.slice(11);
console.log(result);

result= CourseName.slice(-16,-7);
console.log(result);

result = CourseName.substring(0,10);
console.log(result);

result = CourseName.substring(10);
console.log(result);

result = CourseName.replace("Full","Complete");
console.log(result);

result = CourseName.trim(" ");
console.log(result);

result = CourseName.indexOf("Full");
console.log(result);

result = CourseName.split(" ");
console.log(result);

result = CourseName.split(" ")[1];
console.log(result);

//----------------
let url = "www.example.com";
let siteName = "Example Site";

console.log(url.length);
console.log(siteName.split(" "));
console.log(url[1] =="w");
console.log(url.indexOf("Site"));
console.log(url+"/"+siteName.split(" ")[0].toLocaleLowerCase()+"-"+siteName.split(" ")[1].toLocaleLowerCase());

//---------------- Numbers

let num1 = "10";
console.log(typeof num1);

num1 = Number(num1);

console.log(typeof num1);

num1 = parseInt(num1);
console.log(typeof num1);

num1 = 10.55;
console.log(Number.isInteger(num1));

num1 = "a105";
num1 = isNaN(num1);
console.log(num1);

let number = 10.56589;

var resultNumber;
resultNumber = number.toPrecision(4);
console.log(resultNumber);

resultNumber = number.toFixed(2);
console.log(resultNumber);

resultNumber = Math.round(8.2);
console.log(resultNumber);
resultNumber = Math.ceil(8.2);
console.log(resultNumber);
resultNumber = Math.floor(8.7);
console.log(resultNumber);
resultNumber = Math.sqrt(64);
console.log(resultNumber);
resultNumber = Math.abs(-55);
console.log(resultNumber);
resultNumber = Math.pow(5,3);
console.log(resultNumber);
resultNumber = Math.min(4,2,55,23,11,78,0);
console.log(resultNumber);
resultNumber = Math.max(4,2,55,23,11,78,0);
console.log(resultNumber);
resultNumber = Math.random();
console.log(resultNumber);
resultNumber = Math.floor(Math.random() * 100) + 1;
console.log(resultNumber);

//---------------- Arrays
let names = ["Alice", "Bob", "Charlie"];
let Scores = [85, 92, 78];

console.log(`Student: ${names[0]}, Score: ${Scores[0]}`);

let product1 = ["Iphone 15", 5000, "Gold"];
let product2 = ["Samsung S23", 4500, "Black"];
let product3 = [
    "Google Pixel 8", 
    4000, 
    "White"
];
console.log(`Product: ${product1[0]}, Price: ${product1[1]} USD, Color: ${product1[2]}`);
console.log(`Product: ${product1[0]}, Price: ${product1[1]} USD, Color: ${product2[2]}`);

// update
product1[1] = 4800;
console.log(`Updated Price of ${product1[0]}: ${product1[1]} USD`);

// Array Methods
let Students = ["Alice", "Bob", "Charlie"];
let resultArray;
resultArray = Students.length;
console.log(resultArray);
resultArray = Students.toString();
console.log(Students);
resultArray = Students.pop();
console.log(Students);
resultArray = Students.push("David");
console.log(Students);
resultArray = Students.shift();
console.log(Students);
resultArray = Students.unshift("Eve");

resultArray = Students.indexOf("Charlie");
console.log(resultArray);

console.log(Students);
resultArray = Students.lastIndexOf("Bob");
console.log(resultArray);
resultArray = Students.includes("Alice");
console.log(resultArray);

resultArray = Students.splice(0,1);
console.log(resultArray);

resultArray = Students.splice(0,0,"Frank");
console.log(resultArray);

console.log(Students);

//---------------- 
console.log("----------------");
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.log(fruits.indexOf("watermelon"));
fruits.push("Orange");
console.log(fruits[fruits.length - 1]);

fruits.pop();
fruits.pop();
console.log(fruits);


let std1 = ["Emma", 2010, [90, 85, 88]];
let std2 = ["Liam", 2011, [78, 82, 80]];
let std3 = ["Olivia", 2009, [95, 92, 96]];

let std1Age = 2024 - std1[1];
let std1AvgScore = (std1[2][0] + std1[2][1] + std1[2][2]) / 3;
console.log(`Student: ${std1[0]}, Age: ${std1Age}, Average Score: ${Math.floor(std1AvgScore)}`);

let std2Age = 2024 - std2[1];
let std2AvgScore = (std2[2][0] + std2[2][1] + std2[2][2]) / 3;
console.log(`Student: ${std2[0]}, Age: ${std2Age}, Average Score: ${Math.floor(std2AvgScore)}`);
let std3Age = 2024 - std3[1];
let std3AvgScore = (std3[2][0] + std3[2][1] + std3[2][2]) / 3;
console.log(`Student: ${std3[0]}, Age: ${std3Age}, Average Score: ${Math.floor(std3AvgScore)}`);