// --------------- operator ------------------

// Arithmetic Operators
let result;

let a = 10 , b = 5, c = 2;

result = a + b;
console.log(result);
result = a - b;
console.log(result);
result = a * b;
console.log(result);
result = a / b;
console.log(result);
result = a % c;
console.log(result);
result = a ** c;
console.log(result);
result = ++a;
console.log(result);
result = b++;
console.log(result);

// Assignment Operators

let x = 10;
result += (x + result);
console.log(result);
result -= x;
console.log(result);

// Comparison Operators

let isEqual = (a == b);
let n1 = 10 , n2 = '10';
result = (n1 === n2);
result = (n1 == n2);
console.log(result);
isEqual = (n1 != n2);
console.log(isEqual);
isEqual = (n1 !== n2);
console.log(isEqual);
isEqual = (a > b);
console.log(isEqual);