//classes

class Invoice{
  /*
  readonly client: string;//Only read access outside the class
  private details: string;// No access outside the class
  public amount: number; //read and write access outside the class
  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  */
  //OR
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format(){
    return `${this.client} owes $ ${this.amount} for ${this.details}`
  }
}
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