/* function rockPaperScissors(player1, player2) {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (player1 === player2) {
    return "Draw!";
  } else if (rules[player1] === player2) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
console.log(rockPaperScissors("scissors", "paper"));
console.log(rockPaperScissors("scissors", "scissors"));
console.log(rockPaperScissors("scissors", "rock"));
console.log(rockPaperScissors("paper", "paper"));
console.log(rockPaperScissors("paper", "scissors"));
console.log(rockPaperScissors("paper", "rock"));
console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("rock", "paper"));
console.log(rockPaperScissors("scissors", "paper"));
 */

/* function positiveSum(arr) {
 let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum; 

  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5])); */

/* function basicOp(operation, value1, value2) {
  //   return eval(operation + value1 + value2);
  var cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];
}
console.log(basicOp("+", 10, 20));
console.log(basicOp("-", 20, 10));
console.log(basicOp("*", 10, 20));
console.log(basicOp("/", 20, 10)); */

/* function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     ")); */

/* function hero(bullets, dragons) {
  return bullets / dragons >= 2 ? true : false;
}
console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1)); */

/* function arrayPlusArray(arr1, arr2) {
   let arr3 = arr1.concat(arr2);
  return arr3.reduce((acc, curr) => {
    return (acc += curr);
  }); 
  //another solution
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let a = arr1[i];
    let b = arr2[i];
    sum += a + b;
  }
  return sum;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); */

/* function points(games) {
  /* let sum = 0;
  for (let i = 0; i < games.length; i++) {
    let splitVal = games[i].split(":");
    if (splitVal[0] > splitVal[1]) {
      sum += 3;
    } else if (splitVal[0] < splitVal[1]) {
      sum += 0;
    } else {
      sum += 1;
    }
  }
  return sum; */
/* let sum = 0;
  games.reduce((_, curr) => {
    let splitVal = curr.split(":");
    if (splitVal[0] > splitVal[1]) {
      return (sum += 3);
    } else if (splitVal[0] < splitVal[1]) {
      return (sum += 0);
    } else {
      return (sum += 1);
    }
  }, 0);
  return sum; 
  return games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
); */

/* function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); */

/* function arrayDiff(a, b) {
  const setB = new Set(b);
  return a.filter((element) => !setB.has(element));
}
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 2], []));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], [1, 2])); */
/* var foo = 10 + "20";
console.log(foo); */ //1020
// console.log(0.1 + 0.2 == 0.3);//false
/* How would you make this work?
add(2, 5); // 7
add(2)(5); // 7
 */
/* function add(a, b) {
  if (b !== undefined) {
    return a + b;
  } else {
    return function (c) {
      return a + c;
    };
  }
}
console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7 */

// console.log("i'm a lasagna hog".split("").reverse().join(""));
/* var foo = "Hello";
(function () {
  var bar = " World";
  console.log(foo + bar);//This will print Hello World
})();
console.log(foo + bar);// throws reference error as 'bar' is not defined */

/* var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };// foo.x = undefined */

/* console.log("one");
setTimeout(function () {
  console.log("two");
}, 0);
Promise.resolve().then(function () {
  console.log("three");
});
console.log("four"); 
 output:
one
four 
three
two  */
/* (function () {
  var a = (b = 3);
})();
console.log(`a defined? ${typeof a !== "undefined"}`);
console.log(`b defined? ${b} ${typeof b !== "undefined"}`); */
/* console.log("hello" || "world");
console.log("foo" && "bar"); */
/* (function (a, b) {
  console.log(a + b);
})(6, 10); */
/* const duplicate = (arr) => {
  return [...arr, ...arr];
};

console.log(duplicate([1, 2, 3, 4, 5])); */ // [1,2,3,4,5,1,2,3,4,5]

/* let obj = {
  name: "vikas",
  age: 28,
  degree: "MCA",
};
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
} */
/* let b = [];
b.v = 10;
b.push(11);
console.log(b); //[ 11, v: 10 ]
console.log(b.length); //1 this is because there is only one number other is a key:value pair */

/* let arr = [2, 7, 11, 4, -2];
let len = arr.length;
let newArray = [];

for (let i = 0; i < len; i++) {
  let sum = 0;
  for (let j = 0; j < len; j++) {
    if (i === j) {
      continue;
    } else {
      sum += arr[j];
    }
  }
  newArray.push(sum);
}
console.log(newArray); */

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("abc")); //true
console.log(Boolean("")); //false
console.log(Boolean({})); //true
console.log(Boolean([])); //true
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
