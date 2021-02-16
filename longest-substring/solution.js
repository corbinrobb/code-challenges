var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let currentSub = s[0];
  let longestSub = currentSub;

  for (let i = 1; i < s.length; i++) {
    if (currentSub.indexOf(s[i]) === -1) {
      currentSub += s[i];
      if (currentSub.length > longestSub.length) {
        longestSub = currentSub;
      }
    } else {
      if (currentSub.length > 1) {
        currentSub += s[i];
        currentSub = currentSub.slice(currentSub.indexOf(s[i]) + 1);
      }
    }
  }

  return longestSub.length;
};
