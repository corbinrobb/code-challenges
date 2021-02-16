var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  let longestPal = s[0];

  while (end < s.length - 1) {
    while (
      end + 1 < s.length &&
      s.slice(start, end + 2) ===
        s
          .slice(start, end + 2)
          .split("")
          .reverse()
          .join("")
    ) {
      end = end + 1;
      if (longestPal.length < s.slice(start, end + 1).length) {
        longestPal = s.slice(start, end + 1);
      }
    }

    while (
      start - 1 >= 0 &&
      end + 1 < s.length &&
      s.slice(start - 1, end + 2) ===
        s
          .slice(start - 1, end + 2)
          .split("")
          .reverse()
          .join("")
    ) {
      start = start - 1;
      end = end + 1;
      if (longestPal.length < s.slice(start, end + 1).length) {
        longestPal = s.slice(start, end + 1);
      }
    }

    start++;
    end++;
  }

  return longestPal;
};
