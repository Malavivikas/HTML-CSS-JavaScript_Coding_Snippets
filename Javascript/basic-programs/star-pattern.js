//Decending oreder star pattern
/*

*****
****
***
**
*

*/
let starString = '';

for (let i = 1; i <= 5; i++) {
    starString = ''
    for (let j = 5; j > i - 1; j--) {
        starString += '*';
    }
    console.log(starString);
}