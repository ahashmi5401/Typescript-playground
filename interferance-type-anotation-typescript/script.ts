console.log(
  "==========>Type Interference with Annotations in TypeScript<==========",
);

console.log("---------->Example 1: Basic Type Inference<----------");
//Type inference ka matlab hai TypeScript automatically type guess kar leta hai, agar aap explicitly type na likho.
///automatically infers the type of 'num' as number
let num = 42;
console.log(`Value: ${num}`);
//num = true;  Error: Type 'boolean' is not assignable to type 'number'

let message = "Hello, TypeScript!";
// TypeScript infers the type of 'message' as string

console.log(`Message: ${message}`);
console.log("Type of 'message':", typeof message);

console.log("---------->Understanding Type Interference<----------");

let isActive = true; // inferred as boolean
console.log(`Is Active: ${isActive}`);
//isActive = "yes";  Error: Type 'string' is not assignable to type 'boolean'

console.log("---------->Example 2: Function Type Inference<----------");
function add(a: number, b: number) {
  return a + b; // TypeScript infers the return type as number
}
let sum = add(5, 10);
console.log(`Sum: ${sum}`);
//let invalidSum: string = add(5, 10);  Error: Type 'number' is not assignable to type 'string'


console.log("---------->Example 3: Array Type Inference<----------");
let numbers = [1, 2, 3, 4, 5];
// TypeScript infers the type of 'numbers' as number[]
console.log(`Numbers: ${numbers}`);
numbers.push(6);
console.log(`Updated Numbers: ${numbers}`);
//numbers.push("seven");  Error: Argument of type 'string' is not assignable to parameter of type 'number'          

console.log("---------->Example 3: Object Type Inference<----------");
let person = {
    name: "Alice",
    age: 30,
};

//Typescript infers the type of person as { name: string; age: number; }


console.log(`Person: ${person.name}, Age: ${person.age}`);
//person.age = "thirty";  Error: Type 'string' is not assignable to type 'number'

console.log("---------->Example 4: Union Type Inference<----------");
let mixedArray = [1, "two", 3, "four"];
// TypeScript infers the type of 'mixedArray' as (string | number)[]
console.log(`Mixed Array: ${mixedArray}`);
mixedArray.push(5);
mixedArray.push("six");
console.log(`Updated Mixed Array: ${mixedArray}`);
//mixedArray.push(true);  Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

console.log("==========>End of Type Interference Examples<==========");

console.log("---------->Type Anotation Examples<----------");

let count: number = 10;
let username: string = "user123";
let isLoggedIn: boolean = false; 
function multiply(x: number, y: number): number {
  return x * y;
}
let result: number = multiply(5, 4);
console.log(`Result: ${result}`);

//union type annotation

let doubles : (string | number)[] = [1, 2, 3, "four", "five"];
console.log(`Array with Union Types: ${doubles}`);


console.log("---------->End of Type Anotation Examples<----------");


