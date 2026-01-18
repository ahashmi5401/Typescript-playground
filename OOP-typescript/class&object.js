"use strict";
class Person {
    constructor(name2) {
        this.name2 = name2;
    }
}
let person1 = new Person("Muhammad Ayan Hashmi");
// allowed because it's public
person1.name2 = "Muhammad Ayan Hashmi";
//Private modifier example
class PersonPrivate {
    constructor(name2) {
        this.name2 = name2;
    }
    getName() {
        return this.name2;
    }
}
let p2 = new PersonPrivate("Ayan");
p2.getName();
// p2.name2 = "New Name"; // Error: Property 'name2' is private and only accessible within class 'PersonPrivate'.
//Protected modifier example
class PersonProtected {
    constructor(name2) {
        this.name2 = name2;
    }
    getName() {
        return this.name2;
    }
}
let persona = new PersonProtected("Ayan");
persona.getName();
// persona.name2 = "New Name"; // Error: Property 'name2' is protected and only accessible within class 'PersonProtected' and its subclasses.
class Employee extends PersonProtected {
    getEmployeeName() {
        return this.name2; // Allowed: 'name2' is accessible within subclass
    }
}
