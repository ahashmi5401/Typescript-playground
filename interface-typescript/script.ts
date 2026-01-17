interface Person {
  name: string;
  age: number;
  email: string;
}

let user1: Person = {
  name: "Ayan",
  age: 25,
  email: "ahashmi5401@gmail.com"
};

console.log(user1);


// Shallow Copy
let user2 = user1;
user2.name = "Hashmi";
console.log(user2);
console.log(user1);