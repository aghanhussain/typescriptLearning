// interface in typescript
var users = {
    name: "nasir",
    age: 32,
    getName: function (greet) {
        return greet + " Nasir Hussain";
    }
};
console.log(users);
users.age = 35;
console.log(users);
console.log(users.getName("Hello"));
