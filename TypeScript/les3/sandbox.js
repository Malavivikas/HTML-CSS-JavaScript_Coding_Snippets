//Array
var names = ['Vikas', 'Ganesh', 'Yuvraj'];
names.push('Atul');
// names.push(5)//Argument of type number is not assignable to parameter of type String
var numbers = [1, 2, 3, 4, 5];
// numbers.push('shan');
// or
// numbers[1] = 'shan';
//Argument of type 'string' is not assignable to parameter of type 'number'.
var mixed = ['abc', 10, 'pqr', 20];
mixed.push('xyz');
mixed.push(30);
mixed[0] = 5;
console.log(mixed);
// Objects
var ninja = {
    name: 'Vikas',
    age: 28,
    belt: 'black'
};
ninja.age = 26;
ninja.name = 'Prakash';
// ninja.age = '30';//Type 'string' is not assignable to type 'number'
// ninja.skills = ['fighting', 'sneaking']; //Property 'skills' does not exist on type '{ name: string; age: number; belt: string; }
ninja = {
    name: 'Atul',
    age: 28,
    belt: 'black' //if removed will give error as:
    //Property 'belt' is missing in type '{ name: string; age: number; }' but required in type '{ name: string; age: number; belt: string; }'.
};
//once declared with some key and values while overriding must contain same key value pairs. It must be of same structure, type and properties.
