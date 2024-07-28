"use strict";
/* let greet = () => {
    console.log('Hello World!');
} */
let greet;
greet = () => {
    console.log("Hello World!");
};
// greet()
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(1, 2, "Hello World!");
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
