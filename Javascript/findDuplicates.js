/* function findDuplicates(arr) {
  if (arr.length <= 0) {
    return "Please input an array";
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
} */
function findDuplicates(array) {
  var valuesSoFar = {};
  for (var i = 0; i < array.length; ++i) {
    var value = array[i];
    if (value in valuesSoFar) {
      return true;
    }
    valuesSoFar[value] = true;
  }
  return false;
}
let res = findDuplicates([1, 2, 3, 1]);
console.log(res);
