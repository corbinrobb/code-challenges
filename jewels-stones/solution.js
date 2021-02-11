var numJewelsInStones = function (jewels, stones) {
  const jewelsHash = jewels.split("").reduce((acc, curr) => {
    acc[curr] = true;
    return acc;
  }, {});

  return stones
    .split("")
    .reduce((acc, curr) => (curr in jewelsHash ? (acc += 1) : acc), 0);
};
