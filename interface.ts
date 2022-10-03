// interface in typescript

interface userType{
    name:string,
    age:number,
    getName:()=>string
}


let users= {
    name:"nasir",
    age : 32,
    getName:function(greet)
    {
        return greet+ " Nasir Hussain"
    }
}
console.log(users)
users.age = 35
console.log(users)
console.log(users.getName("Hello"))