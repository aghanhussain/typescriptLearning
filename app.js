"use strict";

exports.__esModule = true;
var a = "Hello TS Hello Dear";
console.log(a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("My test function is working fine1");
        console.log("My test function is working fine2");
        console.log("My test function is working fine3");
    };
    return App;
}());
var obj1 = new App();
obj1.test();
