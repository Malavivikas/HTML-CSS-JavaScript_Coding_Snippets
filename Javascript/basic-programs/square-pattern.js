let n = 5;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (let j = 1; j <= n; j++) {
        if (i == 1 || i == n || i == 3) {
            if (j == n || j == 1) {
                str += '+'
            } else {

                str += '-'
            }
        }
        else if (j == 1 || j == n) {
            str += '|'
        }
        else {
            str += ' '
        }
    }
    console.log(str);
}