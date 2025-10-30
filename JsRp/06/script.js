function greet(name , number) 
{
    for (let i = 0; i < number; i++) {
        console.log(`Hello, ${name}!` + i);
    }
}
greet("Alice", 3);

console.log("--------------------");

function calculateRectangleArea(length, width) 
{
    return length * width;
}
let area = calculateRectangleArea(5, 10);
console.log("Area of rectangle: " + area);

console.log("--------------------");

function flipCoin() 
{ 
    let randomNum = Math.random() + 1;
    if (randomNum < 1.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}
let result = flipCoin();
console.log("Coin flip result: " + result);

console.log("--------------------");

function numbersToWords(number) 
{
    const num = [];
    for (let i = 0; i <= number; i++) {
        // number ın tam bölenklerini diziye ekleme
        if (number % i === 0) {
            num.push(i);
        }
    }
    return num;
}
let divisors = numbersToWords(25);
console.log(divisors);

console.log("--------------------");
