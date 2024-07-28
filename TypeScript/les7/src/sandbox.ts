// let greet: Function;

//example 1

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {// should mention the correct type else throws an error
  console.log(`${greeting}  ${name}`);
};
greet("vikas", "hello");

// example 2

let calc: (a: number, b: number, c: string) => number;
// Must match the signature
calc = (num1: number, num2: number, action: string) => {
  if (action === "add") {
    return num1 + num2;
  }else{
    return num1 - num2;
  }
}