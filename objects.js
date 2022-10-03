var users = {
    name: "bruce",
    age: 30,
    address: "USA"
};
// since we have not defined the property types inside object
//  so name will always be updated if need, to str
// and so age to number,and address to str 
//  error will be generated 
//       users.name = 200
console.warn(users);
