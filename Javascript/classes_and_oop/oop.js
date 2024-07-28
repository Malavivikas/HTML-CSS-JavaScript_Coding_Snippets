const user = {
  username: "Vikas",
  loginCount: 8,
  signedIn: true,
  getUserDetals: function () {
    console.log(this.username);
  },
};
/* console.log(user.username);
console.log(user.getUserDetals()); */
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
const userOne = new User("Viki", 1, true); //If 'new' keyword is not used then any further instance creation will replace all the values with latest one and old values will be vanished
const userTwo = new User("Atul", 18, false);
console.log(userOne.constructor);
// console.log(userTwo);
