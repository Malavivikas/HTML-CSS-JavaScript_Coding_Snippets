"use strict";
// let greet: Function;
//example 1
let greet;
greet = (name, greeting) => {
    console.log(`${greeting}  ${name}`);
};
greet("vikas", "hello");
// example 2
let calc;
// Must match the signature
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
