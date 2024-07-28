for (let i = 1; i <= 9; i++) {
    let str = '';
    for (let j = 1; j <= 9; j++) {
        if (j == 5) {
            str += '*'
        } else if (i == 5) {
            str += '*'
        } else if (i == j) {
            str += '*'
        }
         else if (9 - i + 1 == j) {
            str += '*'
        }
        else {
            str += ' '
        }


    }
    console.log(str)
}