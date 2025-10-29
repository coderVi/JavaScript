// Object

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    city: "New York",
    "Birth Date": {
        year: 1993,
        month: 5,
        day: 15
    },
    "hobby": ["reading", "traveling", "swimming"]

};

let result;

result = user;
console.log(result);
result = user.name;
console.log(result);
result = user["Birth Date"].year;
console.log(result);
result = user["email"];
console.log(result);
result = user.hobby[1];
console.log(result);

//-------------------

console.log('-------------------');
const kdv = 1.20;

let order1 = {
    id: 101,
    orderDate: "2024-06-15",
    paymentMethod: ["credit card", "paypal", "bank transfer"],
    cargoAddress: "Küçükçekmece, Istanbul",
    soldProducts: {
        productId: 5,
        productTitle: "Wireless Mouse",
        productDate: "http://example.com/wireless-mouse",
        productPrice: 25.99
    }
};
let order2 = {
    id: 102,
    orderDate: "2024-06-16",
    paymentMethod: ["credit card", "paypal", "bank transfer"],
    cargoAddress: "Kadıköy, Istanbul",
    soldProducts: {
        productId: 6,
        productTitle: "Bluetooth Speaker",
        productDate: "http://example.com/bluetooth-speaker",
        productPrice: 45.99
    }
};
let order3 = {
    id: 103,
    orderDate: "2024-06-17",
    paymentMethod: ["credit card", "paypal", "bank transfer"],
    cargoAddress: "Beşiktaş, Istanbul",
    soldProducts: {
        productId: 7,
        productTitle: "USB-C Hub",
        productDate: "http://example.com/usb-c-hub",
        productPrice: 39.99
    }
};

result = order1.soldProducts.productPrice * kdv ;
console.log(result.toFixed(2) +" USD");
result = order2.soldProducts.productPrice * kdv ;
console.log(result.toFixed(2)+" USD");
result = order3.soldProducts.productPrice * kdv ;
console.log(result.toFixed(2)+" USD");

var total = (order1.soldProducts.productPrice + order2.soldProducts.productPrice + order3.soldProducts.productPrice) * kdv;
console.log("Total: " + total.toFixed(2)+" USD");