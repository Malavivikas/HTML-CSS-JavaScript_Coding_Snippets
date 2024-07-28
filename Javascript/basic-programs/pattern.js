for (let i = 1; i <= 5; i++) {
    let str = ''
    for (j = 1; j <= 10; j++) {
        if (j <= i || j >= (10 - (i - 1))) {
            str += '*';
        }
        else {
            str += ' ';
        }
    }
    console.log(str);
}
for (let i = 4; i >= 1; i--) {
    let str = ''
    for (j = 1; j <= 10; j++) {
        if (j <= i || j >= (10 - (i - 1))) {
            str += '*';
        }
        else {
            str += ' ';
        }
    }
    console.log(str);
}