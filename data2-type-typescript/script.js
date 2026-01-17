console.log("====================>Refrence Data Type TypeScript<===================");
console.log("====================>Array<===================");
var array = [1, 2, 3, 4, 5];
// let fruits : string[] = ["apple", "banana", true]; // Error: Type 'boolean' is not assignable to type 'string'.
var fruits = ["apple", "banana", "cherry"];
console.log("Array:", array);
console.log("String Array:", fruits);
console.log("====================>Tuple<===================");
var tuple2 = [1, "Hello", true];
// let wrongTuple : [number, string] = [1, "Hello", true]; // Error: Source has 3 element(s) but target allows only 2.
//tuple is mutable
console.log("Tuple:", tuple2[0] = 10, tuple2[1] = "World", tuple2[2] = false);
console.log("Tuple:", tuple2);
// Tuple with string, number, boolean
var product = ["Laptop", 50000, true];
console.log(product);
console.log("====================>Enum<===================");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("Enum Color Green:", c); // Output: 1
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
var user = Status.Active;
console.log("Enum Status Active:", user); // Output: ACTIVE
console.log("====================>Any Type<===================");
//any type is recomended and used in javascript
//your ts power is off in any type
var a = 10;
a = "Hello";
a = true;
console.log("Any Type:", a); // Output: true
console.log("====================>Unknown Type<===================");
//unknow type is safer than any type
var b = 20;
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
function logMessage() {
    console.log("This function does not return anything.");
}
logMessage();
console.log('====================>null and undefined type<===================');
var u = undefined;
var n = null;
console.log("Undefined Type:", u);
console.log("Null Type:", n);
console.log("====================>Never Type<===================");
//never type is used when a function never returns
//Functions that never return (e.g., they always throw or loop forever):
function throwError(message) {
    throw new Error(message);
}
// throwError("This is a never type function example.");
//Infinite loop function
function infiniteLoop() {
    while (true) {
        // Loop forever
    }
}
