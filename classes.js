// defining class
var App = /** @class */ (function () {
    function App() {
        // property
        this.name = "Anam Khan";
    }
    //methods: dont need to use function keyword
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getName();
//  initializing class using constructor
var App2 = /** @class */ (function () {
    function App2(name, age) {
        this.name = "Anil";
        this.age = 25;
        this.name = name;
        this.age = age;
        console.log("Object initialized");
    }
    App2.prototype.getName = function () {
        return this.name;
    };
    App2.prototype.getAge = function () {
        return this.age;
    };
    App2.prototype.getDetails = function () {
        console.log("The name is " + this.name);
        console.log("The age is " + this.age);
    };
    return App2;
}());
var a2 = new App2("nasir", 23);
a2.getDetails();
console.warn(a2.getName());
console.warn(a2.getAge());
var a3 = new App2("Asad", 3);
a3.getDetails();
console.warn(a3.getName());
console.warn(a3.getAge());
