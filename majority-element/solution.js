var majorityElement = function (nums) {
  const map = nums.reduce((map, num) => {
    map[num] = num in map ? map[num] + 1 : 1;

    return map;
  }, {});

  let largest = [0, 0];

  for (const [key, value] of Object.entries(map)) {
    if (value > largest[0]) largest = [value, key];
  }

  return largest[1];
};
