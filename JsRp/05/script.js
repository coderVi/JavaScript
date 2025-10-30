let numbers = [1, 2, 3, 4, 5];
let resultNumbers;
for (let index = 0; index < numbers.length; index++) {
    resultNumbers = numbers[index] * numbers[index];
    console.log(resultNumbers);
}

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 5 === 1) {
        continue;
    }
    // Bu sayılar 5 in katlarıdır
    console.log("this is a multiple of 5: " + numbers[index]);
}

for (let index = 100; index >= 50; index--) {
    console.log(index);
}

let products = ["Iphone", "Samsung", "Huawei", "Xiaomi"];
for (let index = 0; index < products.length; index++) {
    console.log(products[index].toUpperCase());
}

let count = 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Samsung")) {
    count++;
  }
}
console.log("Number of products containing 'Samsung': " + count);

let Students = [
  { "ad": "Yiğit", "soyad": "Bilgi", "notlar": [60, 70, 80] },
  { "ad": "Ada", "soyad": "Bilgi", "notlar": [80, 50, 75] },
  { "ad": "Çınar", "soyad": "Turan", "notlar": [70, 70, 80] }
];

for (let i = 0; i < Students.length; i++) {
  let result = 0;
  for (let j = 0; j < Students[i].notlar.length; j++) {
    result += Students[i].notlar[j];
  }
  result /= Students[i].notlar.length;
  console.log(Students[i].ad + " " + Students[i].soyad + " - Ortalama: " + Math.floor(result));
}
