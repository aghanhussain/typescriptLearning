//     ########## return type of function ######
//  we are not defining any return type
// our function can return any type of value
function calc() { return 10 + 10; }
console.warn(calc());
function calc1() { return 12 + 5; }
console.warn(calc1());
// we have defined number type
// our function will return only number type of value
// any other type in return will throw an error
//     ########## parameter type of function ######
function Calc2(val) {
    return val;
}
//  we are restricted to supply a number type argument only
console.warn(Calc2(15));
function funcy(val1, val2) {
    return val2 ? val1 + val2 : val1;
}
//  function with two arguments
console.log(funcy(12, 34));
console.log(funcy(12));
