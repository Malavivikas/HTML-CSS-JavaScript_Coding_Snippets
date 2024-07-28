function printNum(n) {
  let arr = [];
  while (n) {
    arr.push(n);
    n--;
  }
  return arr;
}

console.log(printNum(5));
