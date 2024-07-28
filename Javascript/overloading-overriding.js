//function overloading
// Creating a class "foo"
class foo {
  // Creating an overloadable method/function.
  overloadableFunction() {
    // Define three overloaded functions
    let function1 = function (arg1) {
      console.log("Function1 called with" + " arguments : " + arg1);
      return arg1;
    };

    let function2 = function (arg1, arg2) {
      console.log(
        "Function2 called with" + " arguments : " + arg1 + " and " + arg2
      );
      return arg1 + arg2;
    };

    let function3 = function (arg1) {
      let concatenated__arguments = " ",
        temp = " ";

      // Concatenating all the arguments
      // and storing them into a string
      for (let i = 0; i < arg1.length; i++) {
        concatenated__arguments = concatenated__arguments + arg1[i];
      }

      /* Just ignore this loop and temp letiable, 
			we are using this loop to concatenate 
			arguments with a space between them */
      for (let i = 0; i < arg1.length; i++) {
        temp = temp + " " + arg1[i];
      }

      console.log(
        "Function3 called with this" + " array as an argument : [" + temp + "]"
      );
      console.log("Output of log is : ");

      // Returns concatenated argument string
      return concatenated__arguments;
    };

    /* Here with the help of the length of the
		arguments and the type of the argument 
		passed ( in this case an Array ) we 
		determine which function to be executed */
    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      return function3(arguments[0]);
    } else if (arguments.length === 2) {
      return function2(arguments[0], arguments[1]);
    } else if (arguments.length === 1 && !Array.isArray(arguments[0])) {
      return function1(arguments[0]);
    }
  }
}

// Driver Code

// Instantiate an object of the "foo" class
let object = new foo();

// Call the overloaded functions using the
// function overloadableFunction(...)
// We are passing 1 argument so executes function1
console.log(object.overloadableFunction("Geeks"));

// We are passing two arguments so executes function2
console.log(object.overloadableFunction("Geeks", "for"));

// We are passing an array so executes function3
console.log(object.overloadableFunction(["Geeks", "for", "Geeks"]));

// Function OverRiding
/* JavaScript is “relatively” not object-oriented. It does have the concept of Objects which qualifies it to be
object-oriented, but it does not have the concept of Classes. It is prototypical in nature. Yes yes, I hear you shouting
loud that we can declare classes in JavaScript but let me remind you that this Class notation is merely a syntactical
sugar to the underlying prototypical architecture. */
// JavaScript does support the concept of method overriding. And it does it in very strange ways.
new Date(); //the JavaScript Date() method
//overriding the JavaScript Date() method
function Date() {
  this.date = "This method overrides the default constructor of Date class.";
}
var date2 = new Date();
console.log(date2);
