function fibonacciSeries(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
}
// console.log(fibonacciSeries(6));

function fibonacci(num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[num];
}
console.log(fibonacci(6));
