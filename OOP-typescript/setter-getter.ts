//setter getter
class userAcc {
    private _password : string 
    constructor(public name:string , password : string){
             this._password = password
    }
    get password (){
       return "********"
     }
    set password(newPassword : string){
         if(newPassword.length < 6){
               console.log("too short , weak")
         }else{
            this._password = newPassword
            console.log("Password updated sucessfully")
         }
      }  
    }


let user21 = new userAcc("Ayan", "Mkmiofdbmk#1")
console.log(user21.password)  //getter called
user21.password = "Mkmiofdbmk#1"       //setter called


//salary example
class SalaryGet {
   private _salary : number
    constructor(public name : string , salary : number){
       this._salary = salary 
    }
    get salary1 (){
         return this._salary;
    }
    set salary1 (newSalary : number){
      if(newSalary < 0 ){
         console.log("invalid input")
          return
        }else{
          this._salary = newSalary
        }
     }
 }

 
let emp1 = new SalaryGet("Muhammad Ayan Hashmi", 70000)
console.log(emp1.salary1)//getter run karega isme 
emp1.salary1 = 90000 //setter run karega isme 
console.log("updated salary" , emp1.salary1)