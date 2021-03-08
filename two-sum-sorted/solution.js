var twoSum = function (numbers, target) {
  const hash = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in hash) {
      return [hash[numbers[i]] + 1, i + 1];
    }
    hash[target - numbers[i]] = i;
  }
};
