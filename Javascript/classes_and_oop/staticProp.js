class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const vikas = new User("Vikas");
// vikas.logMe();
// console.log(vikas.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const chatur = new Teacher("Chatur", "chatur@gmail.com");
console.log(chatur.createId());
