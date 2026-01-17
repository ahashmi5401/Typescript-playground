console.log("====================>Refrence Data Type TypeScript<===================");
console.log("====================>Array<===================");
let array : number[] = [1, 2, 3, 4, 5];

// let fruits : string[] = ["apple", "banana", true]; // Error: Type 'boolean' is not assignable to type 'string'.

let fruits : string[] = ["apple", "banana", "cherry"];


console.log("Array:", array);
console.log("String Array:", fruits);

console.log("====================>Tuple<===================");
let tuple2 : [number, string, boolean] = [1, "Hello", true];

// let wrongTuple : [number, string] = [1, "Hello", true]; // Error: Source has 3 element(s) but target allows only 2.

//tuple is mutable
console.log("Tuple:", tuple2[0] = 10, tuple2[1] = "World", tuple2[2] = false)
console.log("Tuple:", tuple2);



// Tuple with string, number, boolean
let product: [string, number, boolean] = ["Laptop", 50000, true];
console.log(product);


console.log("====================>Enum<===================");
 
enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Green;
console.log("Enum Color Green:", c); // Output: 1

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
let user : Status = Status.Active 
console.log("Enum Status Active:", user); // Output: ACTIVE

console.log("====================>Any Type<===================");
//any type is recomended and used in javascript
//your ts power is off in any type
let a:any = 10;
a = "Hello"
a = true
console.log("Any Type:", a);// Output: true

console.log("====================>Unknown Type<===================");
//unknow type is safer than any type
let b:unknown = 20;
// b = b + 10; // Error: Object is of type 'unknown'.
b = "Hello";
if (typeof b === "number") {
    b = b + 10; // Now it's safe to perform number operations
}
if (typeof b === "string") {
    b = b.toUpperCase(); // Now it's safe to perform string operations
}
console.log("Unknown Type:", b); // Output: HELLO

console.log("====================>Void Type<===================");
//if function doesn't return anything use void type
function logMessage(): void {
    console.log("This function does not return anything.");
}

logMessage();

console.log('====================>null and undefined type<===================');
let u: undefined = undefined;
let n: null = null;
console.log("Undefined Type:", u);
console.log("Null Type:", n);


console.log("====================>Never Type<===================");
//never type is used when a function never returns
//Functions that never return (e.g., they always throw or loop forever):
function throwError(message: string): never {
    throw new Error(message);
}
// throwError("This is a never type function example.");
//Infinite loop function
function infiniteLoop(): never {
    while (true) {
        // Loop forever
    }
} 


