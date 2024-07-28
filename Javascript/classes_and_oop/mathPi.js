const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// console.log(Math.PI);
//Math.PI = 5;
//console.log(Math.PI) //Will not change the value. It remains same as defined in core.
const myNewObject = {
  name: "ginger",
  price: 250,
  isAvailable: true,
  makeChai: function () {
    console.log("Chai nahi bani");
  },
};
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));
Object.defineProperty(myNewObject, "name", {
  //   writable: false,
  enumerable: false, //makes value iterable of property name
  //   configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));
for (const [key, value] of Object.entries(myNewObject)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
