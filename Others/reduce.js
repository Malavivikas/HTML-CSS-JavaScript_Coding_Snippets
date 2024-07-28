// const users = [
//     { firstName: "Vikas", lastName: "Malavi", age: 26 },
//     { firstName: "Atul", lastName: "Malavi", age: 31 },
//     { firstName: "Prashant", lastName: "Malavi", age: 32 },
//     { firstName: "Vishal", lastName: "Malavi", age: 25 }
// ];
// const output = users.reduce((acc, curr) => {
//     if (curr.age < 30) {
//         acc.push(curr.firstName);
//     }
//     return acc;

// }, [])
// console.log(output);
var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}