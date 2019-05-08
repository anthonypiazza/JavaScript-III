/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - When used in the global scope "this" will be the iwndow/console object
*
* 2. Implicit Binding - Whenever a function is called by a preceding for, the object left of the dot gets "this"
*
* 3. New Binding - Whenever a constructor finction is used, "this" refers to the specific 
*                  instance of the object that is created and returned by the constructor function
*
* 4. Explicit Binding - Whenever Javascript's call or apply method is used, "this" is explicitly defined 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
}

sayName("John");

// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

myObj.sayHello("Ryan");

// Principle 3
// code example for New Binding

function CordialPerson (greeter) {
    this.greeting = "Hello ";
    this.greeter = greeter;
    this.speak = function () {
        console.log (this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson ('Newman');


jerry.speak();

// Principle 4
// code example for Explicit Binding


function CordialPersons (greet) {
    this.greetings = "Hello ";
    this.greet = greet;
    this.speaking = function () {
        console.log (this.greeting + this.greeter);
        console.log(this);
    };
}

const tim = new CordialPersons ('June');
const june = new CordialPersons ('Tim');

tim.speaking.call(june);
june.speaking.apply(tim);