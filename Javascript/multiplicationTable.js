for (let i = 1; i <= 10; i++) {
  printTable(i);
  console.log("");
}

function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    let row = n + " * " + i + " = " + n * i;
    console.log(row);
  }
}
