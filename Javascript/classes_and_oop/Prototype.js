let myName = "Vikas     ";
console.log(myName.trueLength);

let myHeros = ["thor", "ironman"];

let heroPower = {
  thor: "Hammer",
  ironman: "technology",
  getIronman: function () {
    console.log(`Iron man power is ${this.ironman}`);
  },
};

Object.prototype.vikas = function () {
  console.log("Vikas is  present in  all objects");
};

Array.prototype.heyVikas = function () {
  console.log("Vikas Says Hello!");
};

// heroPower.vikas();
// myHeros.vikas();
// myHeros.heyVikas();
// heroPower.heyVikas();
const User = {
  username: "vikas",
  email: "vikas@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiaurcode   ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};
anotherUsername.trueLength();
"Hitesh".trueLength();
