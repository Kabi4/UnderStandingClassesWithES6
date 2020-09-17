/*
//variables
var firstName;
let lastName; 
const age=10;
let job;

//IIFE's and block method
{
    let rand = Math.random(); 
}


//strings
firstName = "John";
lastName = "Martha";

const name=firstName+lastName;

name.startsWith("J");//true
name.endsWith("tha");//true
name.includes("oh");//true

//template literals
console.log(`Hey ${name} here. I am ${age} years old. I am a ${job='Coder'}.`)

//Arrow Function
document.onmouseleave = (e)=>{
    console.log(e.clientX,e.clientY);
};
//Arrow function doesnt have own this keyword so they share lexographic this keyword where as ES5 function have own or global this keyword

//destructing
let obj = ["John",21];
const [named,aged] = obj;
console.log(named);
console.log(aged);

let obj2 = {
    name2: "Mary",
    age2: 22
}

const {name2,age2} = obj2;
console.log(name2);
console.log(age2);

//Array 
Array.from(arr);

for(let c of arr){
    console.log(c);
}
var arr = [1];
arr.findIndex();
arr.find();

//spread oprator
arr = [1,2,3,4];
arr1 = [...arr];

//default parameters

//You Know If You Know


///Maps Data Structure

const string = new Map();
string.set("Question","What's Your name?");
string.set(1,"Hey! what are you doing?");
string.set(true,"This is cool dude!!");
string.set(false,"Awesome we map almost everthing LOL!!");
console.log(string.get("Question"));
console.log(string.get(1));
console.log(string.get(true));
console.log(string.get(false));
string.delete(false);
//string.clear();
//string.has(4);
//string.size;
string.forEach(element => {
    //dosomethingwithelement
});

for(var [key,value] of string.entries()){
    console.log(`${key} is key with ${value}`);
}


////CLASSES

var Person  = function(name,job){
    this.name = name,
    this.job = job,
};

var athelte = function(name,job,sport,medal){
    Person.call(this,name,job);
};

athelte.prototype = Object.create(Person.prototype);





class Person{
    constructor(name,DOB,job){
        this.name = name;
        this.DOB = DOB;
        this.job = job;
    }
    ///methods declartion
    calculateAge(){
        console.log(`Age of ${this.name} is ${2020-this.DOB}`);
    }

    ///STATIC METHODS THAT ARE INACCESIIBLE BY THE INSTANCES OF THIS CLASS
    static greetings(){
        console.log("Welcome User!");
    }
}

class athelete extends Person{
    constructor(name,DOB,job,medals,sports){
        super(name,DOB,job);
        this.medal = medals;
        this.sports = sports;
    }
    wonMedal(){
        this.medal++;
        console.log(this.medal);
    }
}
*/

    class Town{
        constructor(name,builtYear){
            this.name = name;
            this.builtYear = builtYear;
        }
    }

    class Park extends Town{
        constructor(name,builtYear,trees,area){
            super(name,builtYear);
            this.noOfTrees = trees;
            this.area = area;
        }

        densityCalc(){
            let dense  = this.noOfTrees/this.area;
            this.density = dense;
            console.log(`The ${this.name} has Tree density of ${this.density} trees per sq km.`);
        }

        calcAge(){
            let today = new Date();
            today = today.getFullYear();
            this.age = today - this.builtYear;
        }
    }

    class Street extends Town{
        constructor(name,builtYear,length=35){
            super(name,builtYear);
            this.length = length;
        }
        description(){
            if(length<20){
                this.type = "Tiny Street"; 
            }
            else if(length<30){
                this.type = "Small Street"
            }
            else if(length<40){
                this.type = "Normal Street";
            }
            else if(length<55){
                this.type = "Big Street";
            }
            else{
                this.type = "Huge Street";
            }
            console.log(`${this.name}, built in ${this.builtYear} , is a ${this.type}.`);
        }
    }
    
    ///streets 
    let ocean_Avenue = new Street("Ocean Avenue",1976,15);
    let evergreen_street = new Street("Evergreen Street",1956,45);
    let fourth_Street = new Street("4th Street",1997);
    let sunset_bourneville = new Street("Sunset Bournville",1987,25);

    let green_Park = new Park("Green Park",1945,1123,1.05);
    let national_Park = new Park("National Park",1824,800,0.55);
    let oak_Park = new Park("Oak Park",1945,1957,0.95);
    green_Park.calcAge();
    national_Park.calcAge();
    oak_Park.calcAge();

    
    const streets = [ocean_Avenue,evergreen_street,fourth_Street,sunset_bourneville];
    const parks = [green_Park,national_Park,oak_Park];
    console.log(`---------PARK_DETAILS---------`);
    function averageOfParks(){
        sum = 0;
        for(let cur of parks){
            sum += cur.age;
        }
        console.log(`The average age of all the parks is ${this.sum/parks.length}.`)
    };
    averageOfParks()
    var theParkWith1000Trees = parks.find((e,i)=> e.noOfTrees>1000);
    function print_Park_Details(){
        green_Park.densityCalc();
        national_Park.densityCalc();
        oak_Park.densityCalc();
        console.log(`The ${this.theParkWith1000Trees.name} has ${this.theParkWith1000Trees.noOfTrees} Trees.`);
    }
    print_Park_Details();
    console.log(`-------STREETS_DETAILS-------`);
    function streetsFunction(){
        sum = 0;
        for(let cur of streets){
            sum += cur.length;
        }
        console.log(`The Total length of all the Streets is ${this.sum} kms with an average of ${this.sum/streets.length} kms`);
        streets.forEach(e => e.description());
    };
    streetsFunction();

