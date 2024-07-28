const obj = {};
/* obj.name = "Vikas";
obj.age = 28;
console.log(obj); */
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

let greetFunc = person.greet;
greetFunc();
