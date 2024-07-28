// console.log('Start');
// document.getElementById('btn').addEventListener('click', function cb() {
//     console.log('callback');
// });
// setTimeout(function cb(){
//   console.log("Timer elapsed");
// }, 5000)
// console.log('End');


// console.log('Start');
// setTimeout(function cbT() {
//     console.log("CB setTimeout");
// }, 5000);

// const publicapi = fetch("https://api.publicapis.org/entries")
//     // .then(function cbF() {
//     //     console.log(`CB Public API`);
//     // });
//     .then(response => response.json())
//     .then(data => console.log(JSON.stringify(data)));
// console.log('End');

// var hero = {
//     _name: "John Doe",
//     getSecretIdentity: function() {
//         console.log(this);
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity;

// console.log("stole", hero.getSecretIdentity);
// console.log("stole", stoleSecretIdentity);
// console.log(hero.getSecretIdentity());
// console.log("stole", stoleSecretIdentity());


//Calculation using Higher Order Function

const radius = [1, 2, 3, 4];

const area = function(radius) {
    return Math.PI * radius * radius;
}

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const diameter = function(radius) {
    return 2 * radius;
}

const calculation = function(radius, logic) {
        const output = [];
        for (let i = 0; i < radius.length; i++) {
            output.push(logic(radius[i]));
        }
        return output;
    }
    //Above calculate function can be written using Array Map
console.log(radius.map(area));

console.log(calculation(radius, area));
// console.log(calculation(radius, circumference));
// console.log(calculation(radius, diameter));