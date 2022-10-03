var a = "Hello TS Hello Dear";
console.log(a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("My test function is working fine");
    };
    return App;
}());
var obj1 = new App();
obj1.test();
