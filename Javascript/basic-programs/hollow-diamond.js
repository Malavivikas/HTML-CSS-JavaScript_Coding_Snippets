for (let i = 1; i <= 9; i++) {
    let str = ''
    for (let j = 1; j <= 9; j++) {
        if (j == 5 - i + 1 || j == 5 + i - 1) {
            str += '*'
        } else if (j == (i - 5) + 1 || j == 9 - (i - 5)) {
            str += '*'
        }
        else {
            str += ' '
        }
    }
    console.log(str)
}