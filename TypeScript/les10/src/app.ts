// interface
interface IsPerson{
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Shawn',
  age: 18,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
  // skills: [] // This is not defined in interface
};

const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name)
}

greetPerson(me)

console.log(me);


import { Invoice } from './classes/Invoice.js'


const inv1 = new Invoice('Cisco', 'Work on Cisco Project', 250)
const inv2 = new Invoice('Pearson', 'Work on ePubs', 150)
// console.log(inv1.format());

let invoices: Invoice[] = [];//Allows you to push objects of Invoice class into array.
// invoices.push('Hello'); //Argument of type 'string' is not assignable to parameter of type 'Invoice'.
invoices.push(inv1);
invoices.push(inv2);

// inv1.client = 'Fyzer';
// inv2.amount = 300;

console.log(invoices);
console.log(inv1, inv2)


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value
  );
})