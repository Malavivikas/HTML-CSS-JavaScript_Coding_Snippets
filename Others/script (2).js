// console.log("Hello");
// document.write("Hello!!!");

// function add() {
//     var c = "3" + 2 + 7;
//     console.log(c);
// }
// add();
// document.writeln("<br/>navigator.appCodeName: " + navigator.appCodeName);
// document.writeln("<br/>navigator.appName: " + navigator.appName);
// document.writeln("<br/>navigator.appVersion: " + navigator.appVersion);
// document.writeln("<br/>navigator.cookieEnabled: " + navigator.cookieEnabled);
// document.writeln("<br/>navigator.language: " + navigator.language);
// document.writeln("<br/>navigator.userAgent: " + navigator.userAgent);
// document.writeln("<br/>navigator.platform: " + navigator.platform);
// document.writeln("<br/>navigator.onLine: " + navigator.onLine);
// var x = 5;
// var y = 5;
// console.log(x == y);
// console.log("Is x and y are equal" + x == y); //this will give false
// console.log(`Is x and y are equal: ${x == y}`); //this will give true
// var a = 20;
// var b = 30;
// console.log(a <= b);
// year = 2020;
// debugger;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log(year + " is a leap year!");
//         } else {
//             console.log(year + " is not a leap year!");
//         }
//     } else {
//         console.log(year + " is a leap year!");
//     }
// } else {
//     console.log(year + " is not a leap year!");
// }

// if (scrore = 10) {
//     console.log("Okay");
// } else {
//     console.log("Not ok");
// }
// for (i = 0; i <= 10; +i) {
//     console.log(i);
// }
// var n = parseInt(prompt("Enter a number"));
// for (i = 1; i <= 10; i++) {
//     var ans = n * i;
//     console.log(ans);
// }
// var n1 = 5;
// var n2 = "5";
// console.log(n1 * n2);
// function add(a, b = 5) {
//     return a + b;
// }
// console.log(add(2));
// const sum = () => {
//     let a = 10,
//         b = 20;
//     return `the sum of two numbers is ${a+b}`;
// }
// const sum = () => `the sum of two numbers is ${(a=10)+(b=10)}`
// console.log(sum());

//var arr1 = ["vikas", "subhash", "malavi", "atul", "suresh", "malavi"];
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.length);
// for (i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }
// for (let elements in arr1) {
//     console.log(elements);//will return idex numbers of array arr1
// }
// for (let elements of arr1) {
//     console.log(elements); //will return idex numbers of array arr1
// }
// arr1.forEach(function(elements, index, array) {
//     // console.log(elements + " index: " + index + " " + array);
//     console.log(elements + " index: " + index);
// });
// arr1.forEach((elements, index, array) => {
//     console.log(elements + " index: " + index);
// });
// const arr2 = ["abc",
//     "pqr", "xyz"
// ];
// const count arr2.push('qwer'); //single data add
// arr2.push('dfggh', 'ert', 'ghjk'); //multiple data can be added
// console.log(arr2)
// console.log(count);

// const arr2 = ["abc",
//     "pqr", "xyz"
// ];
// const count = arr2.unshift('aaa');
// console.log(arr2)
// console.log(count);

//indexOf() seraches in forward direction

// var frnds = ['sachin', 'rohan', 'aniket', 'shashi', 'vaibhav'];
// console.log(frnds.indexOf('rohan')); //retruns 1 as index number found at index 1
// console.log(frnds.indexOf('rohan', 2)); //returns -1 if not found
// console.log(frnds.indexOf('shashi'));

//lastIndexOf() seraches in backward direction
// var frnds = ['sachin', 'rohan', 'aniket', 'shashi', 'vaibhav', 'rohan'];
// console.log(frnds.lastIndexOf('rohan')); //this will return 5
// console.log(frnds.lastIndexOf('rohan', 3)); // this will return 1 however it starts searching from last index

//includes() searches the value and returns true or false

// var frnds = ['sachin', 'rohan', 'aniket', 'shashi', 'vaibhav', 'rohan'];
// console.log(frnds.includes('shashi')); //returns true if found and false if not and is case sensitive

//Find() returns the found element in the array, if some element satisfies the testing function or undefined if not found
//only problem is that it returns only one element
// const price = [200, 300, 350, 400, 500, 600, 700];
// const findPri = price.find((currVal) => { //function expression with fat arrow function and find method of array
//     return currVal < 400;//returns 200 as find method only returns one element
// });
// console.log(findPri);
//OR
// const price = [200, 300, 350, 400, 500, 600, 700];
// console.log(price.find((currVal) =>
//     currVal < 400));

//findIndex() returns the found index in the array, if an element of an array satisfies the testing function or -1 if not found

// const price = [200, 300, 350, 400, 500, 600, 700];
// console.log(price.findIndex((currVal) =>
//     currVal > 400));//will return 4 as the index of nearest greater number

//Filter() retruns a new array containing all the elements of calling array for which the provided filtering function returns true
// const price = [200, 300, 350, 400, 500, 600, 700];
// const newPriceTag = price.filter((elem, index) => {
//     //return elem < 400;//returns [ 200, 300, 350 ]
//     return elem > 700; //returns [] empty array
// })
// console.log(newPriceTag);

//sort()

// const months = ["Jan", "March", "Feb", "May", "Dec", "Nov"];
// console.log(months.sort());//returns [ 'Dec', 'Feb', 'Jan', 'March', 'May', 'Nov' ]

// const numbers = [1, 20, 4, 21, 18209, 99];
// console.log(numbers.sort()); //retruns [ 1, 18209, 20, 21, 4, 99 ] as sort() converts into string format and then sorts in UTF-16 code unit values

//popI() method removes the last element  from an array and returns that element. This method changes the length of an array

// const array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1.length);
// console.log(array1.pop());
// console.log(array1);
// console.log(array1.length);

//shift() method removes the first element  from an array and returns that element. This method changes the length of an array

// const array1 = [1, 2, 3, 4, 5, 6];
// console.log(array1.length);
// console.log(array1.shift());
// console.log(array1);
// console.log(array1.length);


// CHallenge Time

// const months = ["Jan", "march", "April", "June", "July"];
// 1. Add "Dec" at the end of array
// 2. What is the return value of splice method
// 3. Update march to March
// 4. Delete June from array

//1 =>
// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);// output: [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

//2 =>
// console.log(newMonth);// ther is no deleted element so it is showing empty array else it will return the deleted element


// 3 =>
// const indexOfMonth = months.indexOf('march');
// if (indexOfMonth != -1) {
//     const updateMonth = months.splice(indexOfMonth, 1, 'March');
//     console.log(updateMonth);
//     console.log(months);
// } else {
//     console.log('No such data found!!!');
// }

// 4 =>
// const indexOfMonth = months.indexOf('June');
// if (indexOfMonth != -1) {
//     const updateMonth = months.splice(indexOfMonth, 1, 'May');
//     console.log(updateMonth);
//     console.log(months);
// } else {
//     console.log('No such data found!!!');
// }


//Map() method

//array.prototype.map()
//let newArray = arr.map(callback(currentValue[, index[, array]]){
//     return element for newArray, after executing something
// }[, thisArg]);

//Returns a new array containing a result of calling function on every element in this array
// const numarr = [1, 4, 9, 16, 25];
// let newArray = numarr.map((currElem, index, arr) => {
//     return currElem > 9;
// });
// console.log(newArray);
// console.log(numarr);


// const numarr = [1, 4, 9, 16, 25];
// let newArray = numarr.map((currElem, index, arr) => {
//     return `Index no: ${index} has value: ${currElem}`
// });
// console.log(newArray);

// output:
// [
//     'Index no: 0 has value: 1', 
//     'Index no: 1 has value: 4', 
//     'Index no: 2 has value: 9', 
//     'Index no: 3 has value: 16',
//     'Index no: 4 has value: 25' 
//   ]

// Challenge Time
// 1. Find the square root of each element in an array:
// let arr = [25, 36, 49, 64, 81];
// let arrRoot = arr.map((currElem) => {
//     return Math.sqrt(currElem); //Output: [ 5, 6, 7, 8, 9 ]
// });
// console.log(arrRoot);

//2. Multiply each element by 2 and return only those elements which are greater than 10?
// let arr = [2, 3, 4, 6, 8];
// let arrMultiply = arr.map((currElem) => {
//     return currElem * 2;
// }).filter((currElem) => {
//     return currElem > 10;
// });
// console.log(arrMultiply);

// OR

// let arr = [2, 3, 4, 6, 8];
// let arrMultiply = arr.map((currElem) => currElem * 2).filter((currElem) => currElem > 10);
// console.log(arrMultiply);



//Reduce Method
// flatten an array means to convert the 2d or 3d array
// into single dimentional array
// The reduce() method executes a reducer function(that you provide)
// on each element of an array, resulting in single output value.

//the reducer function takes 4 argument values:
// 1. accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array

//Example

// let arr3 = [5, 6, 2];
// let sum = arr3.reduce((accumulator, currElem, index, arr3) => {
//     return accumulator += currElem;
// });
// console.log(sum);//Output: 13


//By chaining all methods(map, filter and reduce)
// let arr = [2, 3, 4, 6, 8];
// let arrSum = arr.map((currElem) => currElem * 2).filter((currElem) => currElem > 10).reduce((accumulator, currElem, index, arr) => accumulator += currElem);
// console.log(arrSum);//Output: 28

//How to flatten an array
//converting the 2d or 3d array into single dimentional array

// const arr = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', 'zone8'],
// ];
// let flatArray = arr.reduce((accum, currVal) => {
//     return accum.concat(currVal);
// });
// console.log(flatArray);// [
//     'zone1', 'zone2',
//     'zone3', 'zone4',
//     'zone5', 'zone6',
//     'zone7', 'zone8' 
//   ]


//Strings in JavaScript
// A JavaScript String is zero or more characters written inside quotes(Single or double)
// JavaScript String are used to storing and manipulatinng text
// Strings ccan be created as primitives, from string literals, or as objects, using the String() constructor. there are proerties of strings like length, indexOf, lastIndexOf etc.

// let str = "I am Vikas Malavi";
// console.log(str.indexOf("I"));


// Extracting String Parts

// There are 3 methods for extracting parts of string
//slice(start, end)
//substring(start, end)
//substr(start, length)

//1. Slice() Method
//Slice() method  extracts a part of a string and returns the extracted part in a new string.
// This method takes 2 parameters : Start position and the end position(end not included)

// var str = 'Apple, Bananaa, Kiwi';
// console.log(str.slice(0, 4)); //Output: Appl
// console.log(str.slice(7, -2)); //Output: Bananaa, Ki
// console.log(str.slice(7)); // Output: Bananaa, Kiwi
//The Slice() method selects the method starting at the given start argument,
// and the end at, but does not include, the given end argument.

//Note: The original array will not be changed

//Challenge Time
// Display only 280 chracters of a string like the one used in twitter.

// let str = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est delectus aliquid fugiat eligendi accusamus inventore neque officiis facilis, eveniet excepturi sed quibusdam voluptatibus, ducimus, nostrum ab illum corrupti fugit sit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est delectus aliquid fugiat eligendi accusamus inventore neque officiis facilis, eveniet excepturi sed quibusdam voluptatibus, ducimus, nostrum ab illum corrupti fugit sit.";
// let newStr = str.slice(0, 280);
// console.log(newStr); // Output: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est delectus aliquid fugiat eligendi accusamus inventore neque officiis facilis, eveniet excepturi sed quibusdam voluptatibus, ducimus, nostrum ab illum corrupti fugit sit.Lorem ipsum, dolor sit amet consectetur adipisicin


//The substring() method

//Substring() is similar to slice()
//The diffrence is that the substring cannot accept negative indexes
// var str = 'Apple, Bananaa, Kiwi';
// console.log(str.slice(0, 4)); //Output: Appl
// console.log(str.slice(7, -2)); //Output: Apple,


//The substr() Methods

//This method is also similar to slice()
//The diffrence is that the substr second argument specifies the length of extracted part

// var str = 'Apple, Bananaa, Kiwi';
// console.log(str.substr(0, 4)); //Appl
// console.log(str.substr(-4));// Kiwi



//Replacing String Content
// String.prototype.replace(searchFor, replaceWith)
// The replace() method replaces a specified value with another value in a string

// let str = "I am Vikas Malavi Vikas";
// console.log(str.replace('Vikas', 'Atul')); //Output: I am Atul Malavi Vikas (Point 2)
// console.log(str); // I am Vikas Malavi Vikas (Point 1)


//Points to remember about replace()
// 1. The replace() does not change the string it is called on. It returns a new string
// 2. By default the relpace() method replaces only the first match
// 3. By default, the replace() method is case sensitive.


//Extracting String characters

// There are three method for esxtracting characters from string:
// 1. charAt()
// 2. charCodeAt()
// 3. Property access[]

// 1. charAt(position)
// The charAt() method returns the character at specified index(position) in a string

// let str = "Hello World!";
// console.log(str.charAt(0));// Output: H


// 2. charCodeAt() method
// The charCodeAt() method returns the Unicode of the character at specified index in a string.
// The method returns a UTF - 16 code (an integer between 0 to 65535)

// let str = "Hello World!";
// console.log(str.charCodeAt(0));//Output: 72

// challenge time
// Return the unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;// If -1 not done it will give Nan error
// // console.log(lastChar);// Will return 11 without -1 and with -1 will return 10
// console.log(str.charCodeAt(lastChar));//Output: 68


// 3. Property access

// ECMAScript 5 (2009) allows property access on string
// let str = "HELLO WORLD";
// console.log(str[0]);//Output: H



// Another Useful Methods

// let str = "Vikas Malavi";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


//the concat() method
// concat() method joins two or more strings

// let fname = "Vikas";
// let lname = "Malavi";
// console.log(fname + lname);//Output: VikasMalavi
// console.log(`${fname} ${lname}`);//Output:  Vikas Malavi
// console.log(fname.concat(lname));// Output: VikasMalavi
// console.log(fname.concat(" ", lname));// Output: Vikas Malavi


// String.trim()
// The trim() method removes all whitespacesfrom both sides of string

// let str = "     HELLO WORLD     ";
// console.log(str.trim());//Output: HELLO WORLD
// Only left and right side whitespaces gets removed not the spaces between string


// Converting a String to an Array

// A string can be converted to an array with the split() methods

// var txt1 = "abc pqr bcd cdh";
// var txt2 = "a, b, c, d, f";
// var txt3 = "a| b| c| d| f";
// console.log(txt1.split(" ")); // Output: [ 'abc', 'pqr', 'bcd', 'cdh' ]
// console.log(txt2.split(",")); // Output: [ 'a', ' b', ' c', ' d', ' f' ]
// console.log(txt3.split("|")); // Output: [ 'a', ' b', ' c', ' d', ' f' ]



// Date and Time in Javascript

//Javascript date object represents a single moment in time in a platform independent format that represents milliseconds since 1 January 1970 UTC.

//Creating Date Objects
//There are 4 ways to create date object:

// 1. new Date()
// 2. new Date(year, month, day, hours, minutes, seconds, milliseconds)// it takes 7 arguments
// 3. new Date(milliseconds)// We cannot avoid month section
// 4. new Date(date String)


//new Date()
// Date objects are created with new date() constructor

// let currDate = new Date();
// console.log(currDate); // Output: 2021-04-26T02:05:43.872Z
// On browser it will show Mon Apr 26 2021 07:38:37 GMT+0530 (India Standard Time) thisa output

// OR you can also write like

// console.log(new Date());

// To print output on console like browser we have methods as follows:

// console.log(new Date().toLocaleString()); // Output: 26/4/2021, 7:43:39 am

// console.log(new Date().toString());
// Output: Mon Apr 26 2021 07:44:45 GMT+0530 (India Standard Time)

// Date.now()
// Returns the numeric value corresponding to the current time, the number of milliseconds elapsed since January 1, 1970 00: 00: 00 UTC
// console.log(Date.now()); // Output: 1619403341624


//new Date(year, month, day,...)
//7 numbers specify year, month, day, hour, minutes, seconds & milliseconds (in order)
// Note: Javascript counts months from 0 to 11.
// Ex. January is 0. December is 11.

// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d.toLocaleString());// Output: 24/12/2018, 10:33:30 am
// var d = new Date(2018, 11, 24);
// console.log(d.toLocaleString());// Output: 24/12/2018, 12:00:00 am
// var d = new Date(2018);
// console.log(d.toLocaleString());// Output: 1/1/1970, 5:30:02 am
// var d = new Date(2018, 0);
// console.log(d.toLocaleString());// Output: 1/1/2018, 12:00:00 am
// At least month should be included else it will give wrong output and time will always come with date

// new Date(datestring) creates a new date object from a date string

// var d = new Date("October 13, 2018 11:33:00");
// console.log(d); // Output: 2018-10-13T06:03:00.000Z
// console.log(d.toLocaleString()); // Output: 13/10/2018, 11:33:00 am

//new Date(milliseconds)
// nes Date(milliseconds) creates a new date object as zero time plus nilliseconds

// var d = new Date(0); //Output: 1/1/1970, 5:30:00 am
// var d = new Date(1609574531435);//Output: 2/1/2021, 1:32:11 pm
// var d = new Date(86400000 * 2); //Output: 3/1/1970, 5:30:00 am
// console.log(d.toLocaleString());


// Date Methods:

// const currDate = new Date();

// how to get indivisual date
// console.log(currDate.toLocaleString()); // Output: 26/4/2021, 8:22:53 am
// console.log(currDate.getFullYear()); // Output: 2021
// console.log(currDate.getMonth()); // Output: 3
// console.log(currDate.getDate()); // Output: 26
// console.log(currDate.getDay()); // Output: 1

// how to set indivisual date
// const currDate = new Date();
// console.log(currDate.setFullYear(2021)); // Output: 1619406495166
// The setFullYear() method can optionally set month and day
// console.log(currDate.setFullYear(2021, 10, 5)); // Output: 1636081766898
// console.log(currDate.setMonth(10)); // Output: 1637896095166
// console.log(currDate.setDate(5)); // Output: 1636081695166
// console.log(currDate.toLocaleString()); // Output: 5/11/2021, 8:38:15 am


// Time Methods
// Same like Date get and set hour, minute, seconds and milliseconds methods are available with Time.

// another methods used with date() are:

// const currDate = new Date();
// console.log(currDate.toLocaleTimeString()); // Output: 1:23:23 pm
// console.log(currDate.toLocaleDateString()); // Output: 26/4/2021





// Math Object in JS
// Math object in JS allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);

// let colors = ['red', 'green', 'white'];
// let MyFavColors = [...colors, 'yellow', 'black'];
// console.log(MyFavColors);

// let num = Number.MAX_SAFE_INTEGER;
// console.log(num);//9007199254740991

// Function Currying
//Currying is a technique of evaluating a function with multiple arguments, into sequence of function with single argument.
// In other words, when a function, instead of taking all arguments at one time, takes the first one & return a new function that takes the second one and returns a function which takes the third one, and so forth, until all arguments have been fulfilled.

// function sum(num1) {
//     return function(num2) {
//         return function(num3) {
//             console.log(num1 + num2 + num3);//16
//         }
//     }
// }
// sum(5)(3)(8);

// Or Using fat Arrow Function

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);//16
// sum(5)(3)(8);

// let starCount = 1;
// for (let i = 1; i <= 5; ++i) {
//     for (let j = 1; j <= 5 - i; ++j) {
//         process.stdout.write(' ');
//     }
//     for (let k = 1; k <= starCount; ++k) {
//         process.stdout.write('*');
//     }
//     starCount = starCount + 2;
//     process.stdout.write('\n');
// }
// will output:
//     *
//    * *
//  *  *  *
//  * * * *
//  * * * * *

// function test() {
//     console.log('test 1');
// }

// function test() {
//     console.log('test 2');
// }
// test();
//Will output test 2
// As the default behaviour of Js is to overwrite the function having same name
// In such scenarios, the functions that is defined last will overwrite all the previous functions those have the same name

// console.log("5" * 4);

//The Closure is created when an inner function has access to the arguments and variables of the outer function

//The inner function has access to following elements :
//1. Its own variables
//2. Outer function's variables
//3. Outer function's arguments
//4. Global variables 

//Closure Simple Example 1
// function sayHello() {
//     let name = 'JavaScript';

//     function displayName() {
//         console.log(name);//JavaScript
//     }
//     return displayName;
// }
// let say = sayHello();
// say();

//Closure Example 2 using all terms
// let globalName = 'ECMAScript';

// function sayHello(msg) {
//     let name = 'JavaScript';

//     function displayName() {
//         console.log(`${msg} ${name}`);//Hello Javascript
//         console.log(globalName);// ECMAScript
//     }
//     return displayName;
// }
// let say = sayHello('Hello');
// say();

//Closure Example 3 using an arrow function

// const sayHello = () => {
//     let name = 'Javascript';
//     return () => {
//         console.log(name);//Javascript
//     }
// }
// let say = sayHello();
// say();

//Closure Example 3 using IIFE( Immediately invoked function expression)

// const sayHello = (() => {
//     let name = 'Javascript';
//     return () => {
//         console.log(name);//Javascript
//     }
// })();
// sayHello();

// Counter Example using closure

// const counter = (() => {
//     let count = 0;
//     return {
//         increment: () => {
//             return count += 1;
//         },
//         decrement: () => {
//             return count -= 1;
//         }
//     }
// })();

// console.log(counter.increment());//1
// console.log(counter.increment());//2
// console.log(counter.decrement());//1
// console.log(counter.decrement());//0