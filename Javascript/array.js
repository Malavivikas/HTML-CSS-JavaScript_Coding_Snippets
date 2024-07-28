// let arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12]]];
let arr = [1, 2, 3, 4];
/*const res = arr.splice(2, 1, 5);//find->remove->replace
console.log(res);
console.log(arr); */

// console.log(arr.flat(Infinity));
//Array flattening without flat() method
/* function flattenArray(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
    );
  }, []);
}
console.log(flattenArray(arr)); */
// arr.forEach((ele) => console.log(ele * 2)); //Will return each element multiplied by 2. It will not affect the original array

/* let res = arr.map((ele) => ele * 2); // will return array with each element multiplied by 2.
console.log(res); */
