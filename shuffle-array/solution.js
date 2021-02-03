var shuffle = function (nums, n) {
  const shuffledArray = [];

  for (let i = 0; i < n; i++) {
    shuffledArray.push(nums[i], nums[i + n]);
  }

  return shuffledArray;
};
