//Create a function to reverse a string. For example: "Hi My name is Vikas" will be "sakVi si eman yM iH"
function reverseString(str) {
  //check string
  if (!str || str.length < 2 || typeof str !== "string") {
    return "It's not a string may be!!";
  }
  const backwards = [];

  const len = str.length - 1;

  for (let i = len; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //   console.log(backwards);

  return backwards.join("");
}
const res = reverseString("Hi My name is Vikas");
console.log(res);
//normal built in function
function reverseString2(str) {
  //   return str.split("").reverse().join("");// with split method
  return [...str].reverse().join(""); //with simply spread operator
}
const res2 = reverseString2("Hi My name is Vikas");
console.log(res2);

//with modern es6 arrow function
const reverseString3 = (str) => str.split("").reverse().join("");

const res3 = reverseString3("Hi My name is Vikas");
console.log(res3);
