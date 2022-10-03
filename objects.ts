let users = {
    name:"bruce",
    age:30,
    address:"USA"
}
// since we have not defined the property types inside object
//  so name will always be updated if need, to str
// and so age to number,and address to str 

//  error will be generated 
    //       users.name = 200
console.warn(users)

//  we can update a property of object 
//  we can not add new property to exixting object
// generates error    users.email = "aghanhussain@gmail.com"

//  ### custom type definition####
// we will make an interface 
interface orders_type{
    pen:Number,
    color:String,
    age:Number,
    address:String
}

let orders:orders_type = {
    
    pen:10,
    color:"blue",
    address:"USA",
    age:20

}
// every property defined in interface must be assinged 
// in object. No other propert can further added in 
// object other than interface used 

// ############# Any ##########3

//  in "any" type of value we can assign any dtype
interface azad_interface{
    pen:any,
    color:any,
    age:any,
    address:any
}

let misc_array:any={

// any will allow you to give any dtype 
name:"Asad",
age:34,
class:"tues",
height:5.9,
weight:80

}
//  Allowed to update any type of value in property
misc_array.weight = "Seventy KG"

