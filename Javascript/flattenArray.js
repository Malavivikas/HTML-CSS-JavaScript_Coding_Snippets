const flattenArray = (nestedArray) => {
  return nestedArray.flat(Infinity);
};
const res = flattenArray([1, 2, 3, [4, 5, 6, [7, 8]]]);
console.log(res);
