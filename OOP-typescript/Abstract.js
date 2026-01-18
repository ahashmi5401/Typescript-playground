"use strict";
// 🔹 Abstract Class kya hoti hai?
// Abstract class ek blueprint hoti hai, jise directly instantiate nahi kar sakte (matlab new nahi laga sakte).
// Ye abstract methods define kar sakti hai, jo subclasses me implement karni hoti hain.
// Normal methods bhi rakh sakti hai, optional default behavior ke liye.
// Use Case: Jab aapko common blueprint chahiye aur har subclass apni implementation de.
class Employees {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // normal method: default behavior, optional to override
    showDetails() {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}
class Manager extends Employees {
    calculateBonus() {
        return this._salary * 0.1; // 10% bonus
    }
}
class Developer extends Employees {
    calculateBonus() {
        return this._salary * 0.2; // 20% bonus
    }
}
let mgr = new Manager("Alice", 80000);
mgr.showDetails();
console.log(`Manager Bonus: ${mgr.calculateBonus()}`);
