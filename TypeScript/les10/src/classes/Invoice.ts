export class Invoice{
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