console.log("----- read & optional property -----");
console.log("===== readonly property =====");

class PersonReadonly {
    constructor (public readonly name : string){ }
}
let p1 = new PersonReadonly("Ayan");
console.log(p1.name);
// p1.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property.

class Persona {
  constructor(
    readonly id: number,
    private email: string,
    public name: string
  ) {}

  getEmail() {
    return this.email;
  }
}

const p11 = new Persona(1, "ayan@gmail.com", "Ayan");

console.log(p11.id);        // ✅ allowed
console.log(p11.name);      // ✅ allowed
console.log(p11.getEmail()); // ✅ allowed

// p1.id = 2;     ❌
// p1.email;      ❌
// p1.name = "";  ✅


// read only another example 
class readonlyExample {
  readonly bj = {
    age: 25
  }
}

let r1 = new readonlyExample();
//r1.bj = { }  Error: Cannot assign to 'bj' because it is a read-only property
r1.bj.age = 30; // Allowed: Modifying property of the object
console.log(r1.bj.age); // 30




console.log("===== optional property =====");
class PersonOptional {
    constructor(public name? : string ){    }
}
let pOptional1 = new PersonOptional()
console.log(pOptional1.name); // undefined

let pOptional2 = new PersonOptional("Ayan");
console.log(pOptional2.name); // Ayan


// another optional property example
class User {
  constructor(
    public name: string,          // required
    public email: string,         // required
    public phone?: string,        // optional
    public profilePicture?: string // optional
  ) {}
}

// User who filled everything
const user1 = new User(
  "Ayan",
  "ayan@gmail.com",
  "0301-1234567",
  "ayan.png"
);

// User who skipped optional fields
const user2 = new User(
  "Ali",
  "ali@gmail.com"
);

console.log(user1);
console.log(user2);


