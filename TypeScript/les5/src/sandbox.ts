/* let greet = () => {
    console.log('Hello World!');
} */
let greet: Function;

greet = () => {
  console.log("Hello World!");
};
// greet()

const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c)
};
add(1, 2, "Hello World!");
const minus = (a: number, b: number): number => {
    return a - b;
}
let result = minus(10, 7);
console.log(result);
