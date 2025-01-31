const myArray = ['Jake','Jhon','Alice','Bob'];

function map(arr,callback){
    for (let i = 0; i < arr.length; i++) {

        callback(arr[i])
        
    }
}

function logger(arr){
    map(arr,console.log);
}

logger(myArray);

function greetings(arr){
    map(arr,function(name){
        console.log("Hello My name is " +  name);
    });
}

greetings(myArray);

console.clear();

//-------------------------------------------------
//! Map
const numArr = [2,24,13,22,6];

function doubleNum(num){
    return num * 2;
}

function map1(arr,callback){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const output = callback(arr[i]);
        result.push(output);
    }
    return result;
}

const doubleArr = map1(numArr, doubleNum);
console.log(doubleArr);

//----------------------------------------------------
//! Raduce

const users = [
    {
        name : 'Jhon',
        age : 23,
        balance:100,
        order : [
            { name : "Computer", quantity : 1, price : 750},
            { name : "Mouse Pad", quantity : 2, price : 20},
        ]
    },
    {
        name : 'Alice',
        age : 21,
        balance:70,
        order : [
            { name : "Robot", quantity : 1, price : 1000},
        ]
    },

    {
        name : 'Bob',
        age : 27,
        balance:70,
        order : [
            { name : "Jelibon", quantity : 5, price : 15},
            { name : "Mouse", quantity : 1, price : 150},
            { name : "KeyBoard", quantity : 1, price : 750},
        ]
        
    }
]

console.log(users[1]);
console.log(users[1].name);

function reduce(arr,callback){
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = callback(total,arr[i]);
        
    }
    return total;
}

const totalBalance = reduce(users,function(total,user){
    return total + user.balance;
});

console.log(totalBalance);

const Jhon = users[0];

const JhonTotalOrder = reduce(Jhon.order,function(total,product){
    return total + product.price * product.quantity;
});

console.log(JhonTotalOrder);

//------------------ All Order's Total Pay

function SumOrderPrice(user){
    const userTotal = reduce(user.order,function(total, product){
        return total + product.price * product.quantity;
    });

    return userTotal;
}

const usersTotalOrder = reduce(users,function(total,user){
    return total + SumOrderPrice(user);
});

console.log(usersTotalOrder);

//! Filter

function filter(arr,callback){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let output = callback(arr[i]);
        if(output){
            result.push(arr[i]);
        }
    }
    return result;
}

function isLowerTehn15(num){
    return num < 15;
}

const numbers = [2,10,22,16];

const filteredNums = filter(numbers,isLowerTehn15);

console.log(filteredNums);

//------------

const otherNumbers = filter(numbers,function(num){
    return num>15
});

console.log(otherNumbers);

console.clear();
/* For Each */

var myList = ["Defter","Kitap","Kalem","Silgi"];

function myFunction(yazi)
{
    console.log(yazi);
}

myList.forEach(myFunction);


myArray.forEach(function(yazi){
    console.log(yazi);
});

myList.forEach(yazi => console.log(yazi));


myList.forEach((yazi,index)=>{
    console.log(index + " => " + yazi);
});