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
/* const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name)
}

greetPerson(me)

console.log(me); */
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const inv1 = new Invoice('Cisco', 'Work on Cisco Project', 250);
const inv2 = new Invoice('Pearson', 'Work on ePubs', 150);
// console.log(inv1.format());
let invoices = []; //Allows you to push objects of Invoice class into array.
// invoices.push('Hello'); //Argument of type 'string' is not assignable to parameter of type 'Invoice'.
invoices.push(inv1);
invoices.push(inv2);
/* inv1.client = 'Fyzer';
inv2.amount = 300;

console.log(invoices);
console.log(inv1, inv2) */
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(
    // type.value,
    // tofrom.value,
    // details.value,
    // amount.value
    doc);
    list.render(doc, type.value, 'end');
});
//Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: 'Vikas', age: 40 });
console.log(doc1.name);
const obj1 = {
    uid: 10,
    resourceName: 'person',
    data: 'abc'
};
const obj2 = {
    uid: 10,
    resourceName: 'person',
    data: ['xyz', 'abc']
};
const obj3 = {
    uid: 10,
    resourceName: 'person',
    data: [1, 2]
};
const obj4 = {
    uid: 10,
    resourceName: 'person',
    data: { name: 'abc', age: 20 }
};
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const obj5 = {
    uid: 10,
    resourceType: ResourceType.BOOK,
    data: 1
};
console.log(obj5.resourceType); //0
//tuples
let arr = ['abc', 25, true];
arr[0] = false;
arr[1] = 'abc';
arr = [30, false, 'xyz'];
let tup = ['abc', 10, true]; //here we can't change the type of value and cannot assign other type of values.
// console.log(tup);
tup[0] = 'ken';
// tup[0] = 10 // cannot assign numeric value
let student;
// student = ['abc', 1234, 111] 
//Type '[string, number, number]' is not assignable to type '[string, number]'.
// Source has 3 element(s) but target allows only 2.
student = ['abc', 111];
