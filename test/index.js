let arr = [1, 2, 1, 1, 2, 1, 3, 3];
function removeDuplicates(array) {
  let newAray = [];
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    if (newAray.includes(array[i])) {
      continue;
    } else {
      newAray.push(array[i]);
    }
  }
  return newAray;
}
console.log(removeDuplicates(arr));
function reverseArray(array) {
  let len = array.length;
  let revArray = [];
  for (let i = len - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return revArray;
}
console.log(reverseArray(arr));

let str = "hello";
let spittedArray = str.split("");
let obj = {};
let count = 0;
for (let i = 0; i < spittedArray.length; i++) {
  obj.hasOwnProperty(spittedArray[i])
    ? obj[spittedArray[i]]++
    : (obj[spittedArray[i]] = 1);
  // obj[spittedArray[i]] = (obj[spittedArray[i]] || 0) + 1;
}
console.log(obj);
