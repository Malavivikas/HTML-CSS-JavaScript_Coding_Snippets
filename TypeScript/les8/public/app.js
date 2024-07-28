"use strict";
/* const anchor = document.querySelector('a')!;
// if(anchor)
//   console.log(anchor.href);
console.log(anchor.href); */
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
// console.log(type);
const tofrom = document.querySelector('#tofrom');
// console.log(tofrom);
const details = document.querySelector('#details');
// console.log(details);
const amount = document.querySelector('#amount');
// console.log(amount);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
