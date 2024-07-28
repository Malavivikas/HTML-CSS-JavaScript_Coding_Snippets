//explicit types
let character: string; // Must assign/ only acceptable value is a string
let age: number; // Must assign/ only acceptable value is a number
let isLoggedIn: boolean; // Must assign/ only acceptable value is a boolean value

//Arrays

let ninjas: string[] = [];

//union types

let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);
mixed.push(123);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;

// objects
let obj: object;
obj = { name: "vikas", age: 27 };
// obj = [] // This is allowed as array is also a type object

let obj1: {
  name: string;
  age: number;
  belt: boolean;
};
obj1 = { name: "abc", age: 28, belt: false };

//Any type

let a: any = 25;
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

let ninja: {name: any, age: any};
ninja = {name: "vikas", age: 27};
console.log(ninja);
ninja = {name: 10, age: 'abc'}
console.log(ninja);

