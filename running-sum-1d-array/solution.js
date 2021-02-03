var runningSum = function (nums) {
  return nums.reduce((acc, curr) => {
    acc.length ? acc.push(curr + acc[acc.length - 1]) : acc.push(curr);
    return acc;
  }, []);
};

var runningSumTwo = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
};
