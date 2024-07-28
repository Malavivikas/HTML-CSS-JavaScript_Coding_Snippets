/* const anchor = document.querySelector('a')!;
// if(anchor)
//   console.log(anchor.href);
console.log(anchor.href); */

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
// console.log(type);
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// console.log(tofrom);
const details = document.querySelector('#details') as HTMLInputElement;
// console.log(details);
const amount = document.querySelector('#amount') as HTMLInputElement;
// console.log(amount);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value
  );
  
})