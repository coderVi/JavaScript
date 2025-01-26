console.log('Hello world');

//Dynamic Typed
//Global Değer
var a = "Hello world";
a = 23;
a = true;
a = "Hello Again";
console.log(a);
//local block
let b = "Diğer tanımlama yöntemi";
b = "Yeni Değer";
console.log(b);
//Değişmez
const c = "Değişmeyen veri";
//c = "Atama";
console.log(c);

//Data types
//primitive data type

var str = "Stirng";
var number = 123;
var boolean = false;
var nullvar = null;
var notAnumber = NaN;
var myUndifined = undefined;

var myVar; // <= tanım yapılmadığı için default olarak undefined

//Complex Dta type
//Object

var myObj = {
    name: "Coder Vi",
    age: 23,
    isEngineer: true
};
console.log(myObj)

//Değer okuma
console.log(myObj["age"]);
console.log(myObj.age);

//Yeni prop oluşturma

myObj.country = "USA";
console.log(myObj.country);
console.log(myObj)

//silme
delete myObj.isEngineer;
console.log(myObj)

//update
myObj.name = "Jhon";
console.log(myObj);

console.clear();

//Array
var myArray = ["Jhon", "Jane", 33, 57, false, null, NaN, undefined];

console.log(myArray)

//Read a value
console.log(myArray[0]);
console.log(myArray[3]);
console.log(myArray[5]);

//Change value
myArray[0] = "Bob";
console.log(myArray);


//Değer ekleme
myArray.push("Alice");

console.log(myArray);

//Başa ekleme
myArray.unshift("David");
console.log(myArray);

//değer çıkarmak
//pop() en sondan çıkarır
myArray.pop
console.log(myArray);
//İlk sırada ki elemanı çıkarır
myArray.shift
console.log(myArray);

//math Operators
//toplama
var sum = 32 + 12;
console.log(sum);
//çıkarma
var sum = 32 - 12;
console.log(sum);
//çarpma
var sum = 32 * 12;
console.log(sum);
//bölme
var sum = 32 / 12;
console.log(sum);
//mod alma
var sum = 32 % 12;
console.log(sum);
//üs alma
var multi = 2 ** 3;
console.log(multi);

//Math shortcut
var x = 4;
x += 4;
console.warn(x);

var x = 4;
x *= 4;
console.warn(x);

var x = 4;
x -= 4;
console.warn(x);

var x = 4;
x /= 4;
console.warn(x);

x++;
x--;
console.clear();

//Conditional
var n = 13;
var l = 7;
var com1 = n > l;
console.warn(com1);

var con2 = n < 1;
console.warn(con2);

var con3 = 13 <= n;
console.warn(con3);

//equality check
var con5 = 5 == "5";
console.warn(con5);

//strict equality check 
var con5 = 5 === "5";
console.warn(con5);

//not equal check
var con6 = "44" !== 44;
console.warn(con6);

console.clear();
//if
if (3 > 5) {
    console.warn("3 büyüktür 5");
}
var msg = "hello";

if (msg === "hello") {
    console.warn("Message is hello");
}

//else
var age = 45;
if (age >= 65) {
    console.warn("Aşı oldunuz mu");
} else {
    console.warn("Daha gençsiniz");
}

//-

var jhonAge = 29;
if (jhonAge >= 45) {
    console.warn("Jhon 45 den büyüktür");
}
else if (jhonAge >= 18) {
    console.warn("Jhon 18 den büyüktür");
}
else if (jhonAge >= 12) {
    console.warn("Çocuk");
}
else {
    console.warn("Çok küçük");
}

//switch case

var firstName = "Alice";

switch (firstName) {
    case "Bob":
        console.warn("Adı bob");
        break;
    case "Jhon":
        console.warn("Adı Jhon");
        break;
    case "Alice":
        console.warn("Adı Alice");
        break;
    default:
        console.warn("Adı girilmedi");
        break;
}
console.clear();
//Loops
//For
var loopArray = ["Ali","Veli","Ayşe","Kerim"]
for (let i = 0; i < loopArray.length; i++) {
    console.warn(loopArray[i]);
}

var z = 2;
for (let z = 0; z < 5; z++) {
    console.warn("z = ",z);
}

console.warn("Global z " ,z);

//negatif yönlü for

for (let i = 10; 0<i; i--) {
    console.warn("i = ",i );
}

console.clear();

//while
let myAge = 33;

while (myAge<=65) {
    console.warn("Hala emekli değilsin");
    myAge++;
}

console.warn(myAge);


let yourAge = 100;
do {
    console.warn("90 yaşından küçüksün");
    yourAge++;
} while (yourAge<90);

console.warn(yourAge);

console.clear();
//Functions

function add(){
    console.warn("Add Funtions", 4+10);
}
add();

// parametre alan fonksiyon
function double (n){
    console.warn(n*2);
}
double(5);

function multip(x,y){
    console.warn(x*y);
}
multip(5,7);

//Anonym
var addFN = function(a,b){
    console.log(a+b);
    return a+b
}
const output1 = addFN(5,7);
console.log(output1);
console.clear();
function toplam(a,b){
    console.log("A değerinin number olup olmadığını kontrol edelim");
    if(typeof a!== "number"){
        console.warn("A değişkeni number değil");
        return NaN;
    }
    console.log("A 10 dan küçük mü?");
    if(a>=10){
        return a+b;
    }
    
    console.log("Sonuç hesaplanıyor");
    return 10 + a+ b;
}
const result1 = toplam(2,1)
console.log(result1);

const result2 = toplam(12,3);
console.log(result2)

const result3 = toplam("a",3);
console.log(result3);