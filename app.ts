// export {} to resolve duplicate identifeir issue 
//  we can use modular approach also to remove this issue
export {} 
let a = "Hello TS Hello Dear"
console.log(a)

class App{
    test(){
        console.log("My test function is working fine1")
        console.log("My test function is working fine2")
        console.log("My test function is working fine3")
    }
}
let obj1 = new App()
obj1.test()
