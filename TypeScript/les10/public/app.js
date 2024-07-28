const me = {
    name: 'Shawn',
    age: 18,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
    // skills: [] // This is not defined in interface
};
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const inv1 = new Invoice('Cisco', 'Work on Cisco Project', 250);
const inv2 = new Invoice('Pearson', 'Work on ePubs', 150);
// console.log(inv1.format());
let invoices = []; //Allows you to push objects of Invoice class into array.
// invoices.push('Hello'); //Argument of type 'string' is not assignable to parameter of type 'Invoice'.
invoices.push(inv1);
invoices.push(inv2);
// inv1.client = 'Fyzer';
// inv2.amount = 300;
console.log(invoices);
console.log(inv1, inv2);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
