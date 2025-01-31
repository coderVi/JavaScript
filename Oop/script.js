class Animal{
    //base class, super class, parent class

    isAlive = true;
    type = 'Animal';

    eat = function(){
        console.log("eating... ");
    }
    

    constructor(color,legs)
    {
        this.color = color;
        this.legs = legs;
    }

    walk(){
        console.log("Walking... ");
    }
}

const animal = new Animal("brown",4);
console.log(animal.walk());
console.log(animal);

class Bird extends Animal{
    // child
    constructor(color,name){
        super(color,2);
        this.name = name;
    }
    walk(){
        super.walk();
        console.log("I can not want walk because I can Fly");
    }
}

const twitty = new Bird("yellow","Twitty");
twitty.walk();

//------ Example ------------

class employees{
    constructor(name, surname, age){
        this.NameOf = name;
        this.Surname = surname;
        this.AgeOf = age;
    }

    fullName = function (){
        return this.NameOf + " " + this.Surname;
    }
}
const employee1 = new employees("Ali","YILMAZ",55)
console.log(employee1.fullName());

employees.prototype.city = "İstanbul";
console.log(employee1);

//--------- 3

class araba{
    constructor(marka){
        this.arabaMarka = marka;
    }

    present(){
        return "I have a " + this.arabaMarka;
    }
}

class model extends araba{
    constructor(marka,mod){
        super(marka);
        this.arabaModel = mod;
    }

    goster(){
        return this.present() + ", it is a " + this.arabaModel;
    }
}

const myCar = new model("Ford", "Mustang");
console.log(myCar.goster());

/* 4 */

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
    age1(x){
        return x- this.year;
    }
}

const myCar2 = new Car('Ford', 2014);
console.log(myCar2.age());
document.getElementById("demo").innerHTML = "My Car is " + myCar2.age() + " years old!"

const myCar1 = new Car("Honda", 2022);
console.log(myCar1.age(2019)); 