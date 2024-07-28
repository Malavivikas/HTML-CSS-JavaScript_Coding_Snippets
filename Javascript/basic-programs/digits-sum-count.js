let n = 123459;
let temp = n;
let count = 0;
let sum = 0;
let rem;
while (n >= 1) {
    rem = parseInt(n % 10);
    console.log(rem);
    sum += rem;
    count++;
    n = parseInt(n / 10);
}

console.log(`Digits count in ${temp} is ${count}`);
console.log(`Sum of digits of ${temp} = ${sum}`);