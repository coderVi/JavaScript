if(3<5){
    console.log("3 is less than 5");
}
else{
    console.log("3 is not less than 5");
}

console.log("-----");
alert("Checking age...");
var age = prompt("Please enter your age:");
if(age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}

console.log("-----");

var age=20;
var graduated="High School";

if(age >= 18 && (graduated === "High School" || graduated === "University")){
    console.log("You are eligible to apply for a driver's license.");
}
else if(age < 18 && (graduated === "High School" || graduated === "University")){
    console.log("You need to be at least 18 years old to apply for a driver's license.");
}
else if(age >= 18 && (graduated !== "High School" && graduated !== "University")){
    console.log("You need to have graduated from High School or University to apply for a driver's license.");
}
else{
    console.log("You are not eligible to apply for a driver's license.");
}

console.log("-----");

let x = 10 , y = 51, z = 103;
if(x > 50 || x<100){
    console.log("x is between 50 and 100");
}
else if(y > 50 || y<100){
    console.log("y is between 50 and 100");
}
else if(z > 50 || z<100){
    console.log("z is between 50 and 100");
}
else{
    console.log("none of the numbers are between 50 and 100");
}

console.log("-----");

if(x % 2 === 0){
    console.log("x is even");
}
else if(y % 2 === 0){
    console.log("y is even");
}
else if(z % 2 === 0){
    console.log("z is even");
}
else{
    console.log("none of the numbers are even");
}

console.log("-----");

if(x > y && x > z){
    console.log("x is the largest number");
}
else if(y > x && y > z){
    console.log("y is the largest number");
}
else if(z > x && z > y){
    console.log("z is the largest number");
}
else{
    console.log("There is no largest number");
}
console.log("-----");

let midtermScore1 = 20;
let midtermScore2 = 12;
let finalScore = 70;

let midterm = ((midtermScore1 + midtermScore2) / 2) * 0.4;
let final = finalScore * 0.6;
let overall = midterm + final;
if( finalScore >= 70 || overall >= 50){
    console.log("Geçtiniz");
}
else{
    console.log("Kaldınız");
}
console.log(overall);