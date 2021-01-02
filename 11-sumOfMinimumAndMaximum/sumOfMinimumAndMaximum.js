function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var min = nums[0], max = nums[0];

  for (i = 0; i < nums.length; i++) {
     let sum = nums[i];
     min = (sum < min) ? sum : min
     max = (sum > max) ? sum : max
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
