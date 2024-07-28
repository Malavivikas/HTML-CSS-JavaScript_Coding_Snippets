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

/* const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name)
}

greetPerson(me)

console.log(me); */


import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const inv1 = new Invoice('Cisco', 'Work on Cisco Project', 250)
const inv2 = new Invoice('Pearson', 'Work on ePubs', 150)
// console.log(inv1.format());

let invoices: Invoice[] = [];//Allows you to push objects of Invoice class into array.
// invoices.push('Hello'); //Argument of type 'string' is not assignable to parameter of type 'Invoice'.
invoices.push(inv1);
invoices.push(inv2);

/* inv1.client = 'Fyzer';
inv2.amount = 300;

console.log(invoices);
console.log(inv1, inv2) */


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  }else{
    doc = new Payment(...values)
  }

  console.log(
    // type.value,
    // tofrom.value,
    // details.value,
    // amount.value
    doc
  );
  list.render(doc, type.value, 'end')
})

//Generics

const addUID = <T extends /* object */ {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid}
}

let doc1 = addUID({name: 'Vikas', age: 40})
console.log(doc1.name);
// let doc2 = addUID('hello') //Argument of type 'string' is not assignable to parameter of type 'object'.

//with Interfaces
interface Resource<T>{
  uid: number;
  resourceName: string;
  data: T;
}

const obj1: Resource<string> = {//String type data
  uid: 10,
  resourceName: 'person',
  data: 'abc'
}
const obj2: Resource<string[]> = {//String Array
  uid: 10,
  resourceName: 'person',
  data: ['xyz', 'abc']
}
const obj3: Resource<number[]> = {//number array
  uid: 10,
  resourceName: 'person',
  data: [1, 2]
}
const obj4: Resource<object> = {//Object
  uid: 10,
  resourceName: 'person',
  data: {name: 'abc', age: 20}
}

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Library<T>{
  uid: number;
  resourceType: ResourceType;
  data: T;
}
const obj5: Library<number> = {
  uid: 10,
  resourceType: ResourceType.BOOK,
  data: 1
}
console.log(obj5.resourceType);//0

//tuples
let arr = ['abc', 25, true];
arr[0] = false;
arr[1] = 'abc';
arr = [30, false, 'xyz']

let tup: [string, number, boolean] = ['abc', 10, true] //here we can't change the type of value and cannot assign other type of values.
// console.log(tup);
tup[0] = 'ken';
// tup[0] = 10 // cannot assign numeric value

let student: [string, number];
// student = ['abc', 1234, 111] 
//Type '[string, number, number]' is not assignable to type '[string, number]'.
// Source has 3 element(s) but target allows only 2.
student = ['abc', 111]
