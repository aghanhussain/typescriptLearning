// defining class

 class App{
    // property
    name = "Anam Khan"

    //methods: dont need to use function keyword
    getName(){
        console.log(this.name)
    }
 }

 let a1 = new App()
 a1.getName()


//  initializing class using constructor

class  App2{
    name:string="Anil"
    age:number= 25
    constructor(name:string, age:number){
        this.name = name
        this.age = age
        console.log("Object initialized")
    }
    getName(this):string{
        return this.name
    }

    getAge(this):number{
        return this.age
    }

    getDetails(this):void{
        console.log("The name is "+ this.name)
        console.log("The age is "+ this.age)
    }
}

let a2 = new App2("nasir",23)
a2.getDetails()
console.warn(a2.getName())
console.warn(a2.getAge())

let a3 = new App2("Asad",3)
a3.getDetails()
console.warn(a3.getName())
console.warn(a3.getAge())
