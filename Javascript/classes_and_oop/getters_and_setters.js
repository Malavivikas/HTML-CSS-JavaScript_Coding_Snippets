class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    // return this._password.toUpperCase();
    return `${this._password}abcd`;
  }
  set password(value) {
    this._password = value;
  }
}
const obj = new User("vikasm@gmail.com", "vikas@123");
console.log(obj.password); //
