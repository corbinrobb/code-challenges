var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let positions = [-1, -1];

  while (start <= end) {
    const mid = Math.floor((end + start) / 2);

    if (nums[mid] === target) {
      positions = [mid, mid];
      while (nums[positions[0] - 1] === target) {
        positions[0] = positions[0] - 1;
      }
      while (nums[positions[1] + 1] === target) {
        positions[1] = positions[1] + 1;
      }
      return positions;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    }
  }

  return positions;
};
