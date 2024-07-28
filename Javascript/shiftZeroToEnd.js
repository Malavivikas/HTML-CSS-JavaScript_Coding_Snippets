let arr = [0, 1, 0, 3, 12];
function shiftZerosToEndOfArray(nums) {
  let count = 0;
  console.log(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      //   console.log("nums[count]", nums[count]);
      //   console.log("nums[i]", nums[i]);
      count++;
    }
  }
  console.log(nums.length);
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
}
let res = shiftZerosToEndOfArray(arr);
console.log(res);
