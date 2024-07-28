// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

// Normal Solution
/* var fib = function (n) {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}; */

// Recursive Solution
/* const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}; */

// One Liner
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(11));

// Fibonacci series up to 'n'

function printFibonacciSeries(n) {
  let a = 0,
    b = 1;

  console.log(`Fibonacci Series up to ${n}:`);
  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
  }
}

printFibonacciSeries(10);
