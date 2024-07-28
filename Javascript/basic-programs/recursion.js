/* function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5)); */

/* function sum(num) {
  if (num <= 0) {
    return num;
  } else {
    return (num += sum(num - 1));
  }
}
console.log(sum(5)); */

let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro"}';

let userObj = JSON.parse(userStr);
let userObj1 = JSON.stringify(userStr);
let userObj2 = JSON.parse(JSON.stringify(userStr));
let userObj3 = JSON.stringify(JSON.parse(userStr));

console.log(userObj);
console.log(userObj1);
console.log(userObj2);
console.log(userObj3);
