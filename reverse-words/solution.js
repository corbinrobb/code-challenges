var reverseWords = function (s) {
  return s.trim().replace(/ +/g, " ").split(" ").reverse().join(" ");
};
