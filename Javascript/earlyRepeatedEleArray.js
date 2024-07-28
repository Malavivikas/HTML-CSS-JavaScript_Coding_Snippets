const findEarlyRepeatedElament = (arr) => {
  const obj = {};
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] !== undefined) {
        return arr[i];
      } else {
        obj[arr[i]] = i;
      }
    }
  }
  return undefined;
};

console.log(findEarlyRepeatedElament([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findEarlyRepeatedElament([2, 1, 1, 2, 5, 1, 2, 4]));
console.log(findEarlyRepeatedElament([2, 3, 4, 5]));
