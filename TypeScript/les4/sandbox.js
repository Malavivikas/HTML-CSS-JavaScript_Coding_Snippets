//explicit types
var character; // Must assign/ only acceptable value is a string
var age; // Must assign/ only acceptable value is a number
var isLoggedIn; // Must assign/ only acceptable value is a boolean value
//Arrays
var ninjas = [];
//union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);
mixed.push(123);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// objects
var obj;
obj = { name: "vikas", age: 27 };
// obj = [] // This is allowed as array is also a type object
var obj1;
obj1 = { name: "abc", age: 28, belt: false };
//Any type
var a = 25;
console.log(a);
a = "abc";
console.log(a);
a = true;
console.log(a);
a = 10;
console.log(a);
a = { name: "vikas", age: 27 };
console.log(a);
a = [1, 2, 3];
console.log(a);
var ninja;
ninja = { name: "vikas", age: 27 };
console.log(ninja);
ninja = { name: 10, age: 'abc' };
console.log(ninja);
