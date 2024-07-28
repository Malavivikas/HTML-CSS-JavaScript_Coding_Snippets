var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i] + nums[i + 1];
    if (sum === target) {
      return [i, i + 1];
    }
  }
};

// let res = twoSum([2, 7, 5, 10], 9);
// let res = twoSum([3, 2, 4], 6);
let res = twoSum([3, 3], 6);
console.log(res);
