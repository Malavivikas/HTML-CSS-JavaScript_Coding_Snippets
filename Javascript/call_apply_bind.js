const person = {
  name: "Abhideep Ghosh",
  hello: function (say, word = "") {
    console.log(`${this.name} says ${say} ${word}`);
  },
};

person.hello("hello");

const newPerson1 = {
  name: "Abhijit Ghosh",
};

person.hello.call(newPerson1, "hello");

const newPerson2 = {
  name: "Arika Ghosh",
};

person.hello.apply(newPerson2, ["hello", "world"]);

const newPerson3 = {
  name: "Ghosh",
};

const newHello = person.hello.bind(newPerson3);
newHello("hello");
