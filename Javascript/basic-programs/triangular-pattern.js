let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        string += "*";
    }
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    for (let j = 0; j < n - i; j++) {
        string += " ";
    }
    for (let l = 0; l < i; l++) {
        string += "*";
    }
    string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
    for (let k = 0; k < n - i; k++) {
        string += "*";
    }
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    for (let l = 0; l < n - i; l++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);