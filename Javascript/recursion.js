/* let arr = [1, 2, 3, 4, 5];
function recursion(arr1) {
  if (arr1.length == 0) {
    return "Done!";
  }
  console.log(arr1.map((item) => item));
  arr1.length--;
  return recursion(arr1);
}
recursion(arr); */
let factorial = 1;
function findFactorial(num) {
  if (num == 1 || num == 2) {
    return num;
  }
  return (num *= findFactorial(num - 1));
}

console.log(findFactorial(5));
function factorialFinder(num) {
  let fact = 1;
  if (num == 1 || num == 2) {
    return num;
  }
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorialFinder(5));
