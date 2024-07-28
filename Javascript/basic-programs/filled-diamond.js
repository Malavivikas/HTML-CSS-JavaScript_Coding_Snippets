n = 5;
let l = n * 2 - 1;
for (let i = 1; i <= l; i++) {
    let s = "";
    for (let j = 1; j <= l; j++) {
        if (j >= 5 - i + 1 && j <= 5 + i - 1 && j >= (i - 5) + 1 && j <= 9 - (i - 5)) {
            s += '*'
        }
        else {
            s += ' '
        }
    }
    console.log(s);
}