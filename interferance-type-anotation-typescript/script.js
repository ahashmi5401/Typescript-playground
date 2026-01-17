console.log("==========>Type Interference with Annotations in TypeScript<==========");
console.log("---------->Example 1: Basic Type Inference<----------");
//Type inference ka matlab hai TypeScript automatically type guess kar leta hai, agar aap explicitly type na likho.
///automatically infers the type of 'num' as number
var num = 42;
console.log("Value: ".concat(num));
//num = true;  Error: Type 'boolean' is not assignable to type 'number'
var message = "Hello, TypeScript!";
// TypeScript infers the type of 'message' as string
console.log("Message: ".concat(message));
console.log("Type of 'message':", typeof message);
console.log("---------->Understanding Type Interference<----------");
var isActive = true; // inferred as boolean
console.log("Is Active: ".concat(isActive));
//isActive = "yes";  Error: Type 'string' is not assignable to type 'boolean'
console.log("---------->Example 2: Function Type Inference<----------");
function add(a, b) {
    return a + b; // TypeScript infers the return type as number
}
var sum = add(5, 10);
console.log("Sum: ".concat(sum));
//let invalidSum: string = add(5, 10);  Error: Type 'number' is not assignable to type 'string'
console.log("---------->Example 3: Array Type Inference<----------");
var numbers = [1, 2, 3, 4, 5];
// TypeScript infers the type of 'numbers' as number[]
console.log("Numbers: ".concat(numbers));
numbers.push(6);
console.log("Updated Numbers: ".concat(numbers));
//numbers.push("seven");  Error: Argument of type 'string' is not assignable to parameter of type 'number'          
console.log("---------->Example 3: Object Type Inference<----------");
var person = {
    name: "Alice",
    age: 30,
};
//Typescript infers the type of person as { name: string; age: number; }
console.log("Person: ".concat(person.name, ", Age: ").concat(person.age));
//person.age = "thirty";  Error: Type 'string' is not assignable to type 'number'
console.log("---------->Example 4: Union Type Inference<----------");
var mixedArray = [1, "two", 3, "four"];
// TypeScript infers the type of 'mixedArray' as (string | number)[]
console.log("Mixed Array: ".concat(mixedArray));
mixedArray.push(5);
mixedArray.push("six");
console.log("Updated Mixed Array: ".concat(mixedArray));
//mixedArray.push(true);  Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log("==========>End of Type Interference Examples<==========");
console.log("---------->Type Anotation Examples<----------");
var count = 10;
var username = "user123";
var isLoggedIn = false;
function multiply(x, y) {
    return x * y;
}
var result = multiply(5, 4);
console.log("Result: ".concat(result));
//union type annotation
var doubles = [1, 2, 3, "four", "five"];
console.log("Array with Union Types: ".concat(doubles));
console.log("---------->End of Type Anotation Examples<----------");
