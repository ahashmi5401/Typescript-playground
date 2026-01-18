// 🔹 Static kya hota hai?

// Normally jab hum class ke object banaate hain, properties aur methods har object ke liye alag hote hain.

// Lekin static member class ke sath attach hota hai, object ke sath nahi.

// Matlab har instance me alag nahi, sabke liye same hota hai, aur ise class ke naam se access karte hain.

// Rule:
// Static ko use karne ke liye object se nahi, class ke naam se access karte hain.

class userCounter {
     static count : number = 0 ;
    constructor(name : string){
        console.log(`User Created: ${name}`);
        console.log(`Total Users: ${userCounter.count + 1}`);
       userCounter.count++
    }
}
let u1 = new userCounter("Muhammad")
let u2 = new userCounter("Ayan")
let u3 = new userCounter("Hashmi")
