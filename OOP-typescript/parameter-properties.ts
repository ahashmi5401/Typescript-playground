// 🔹 What are Parameter Properties?

// In TypeScript, you can declare and initialize class properties directly in the constructor parameters using:

// public → accessible outside

// private → accessible only inside

// protected → accessible in the class and its subclasses

// readonly → cannot change after assignment

console.log("----- parameter properties -----");

class Users {
  constructor(
    public name: string,
    public email: string,
    private password: string,
    readonly id: number
  ) {}

  getPassword() {
    return this.password; // safe access inside class
  }
}
let auser1 = new Users("Ayan", "ayan@gmail.com", "password123", 1);
//auser1.password  Error: Property 'password' is private and only accessible within class 'Users'.
console.log(auser1.name); // Allowed: public
console.log(auser1.email); // Allowed: public
console.log(auser1.id); // Allowed: readonly

auser1.name = "New Ayan"; // Allowed: public
// auser1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

console.log(auser1.getPassword()); // Allowed: safe access through method




class Employee1 {
  constructor(
    public name: string,
    public role: string,
    private salary: number,
    readonly employeeId: number
  ) {}
  salaryRaise (ammount : number ){
    this.salary += ammount;
  }
  getSalary() {
    return this.salary;
  }
}
let emp1 = new Employee1("Ayan Hashmi", "Developer", 50000, 101);
console.log(emp1.name); // Allowed: public
emp1.salaryRaise(5000);
console.log(emp1.getSalary()); // Allowed: safe access through method
// emp1.salary; // Error: Property 'salary' is private and only accessible within class 'Employee1'.
// emp1.employeeId = 102; // Error: Cannot assign to 'employeeId' because it is a read-only property.