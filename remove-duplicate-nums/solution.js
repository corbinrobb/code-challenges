var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let dupAmount = 0;
    while (nums[i] === nums[i + dupAmount + 1]) {
      dupAmount += 1;
    }
    if (nums[i] === nums[i + dupAmount - 1]) {
      nums.splice(i + 1, dupAmount);
    }
  }

  return nums.length;
};
