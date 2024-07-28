function countTrue(arr) {
  return arr.reduce((acc, curr) => {
    if (curr) acc++;
    return acc;
  }, 0);
}
console.log(countTrue([true, false, false, true, false]));
