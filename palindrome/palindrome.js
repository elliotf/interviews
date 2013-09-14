String.prototype.isPalindrome = function() {
  var str = this;
  var half = parseInt(str.length / 2, 10);

  for (var i = 0, last = str.length - 1; i < half; ++i) {
    if (str[i] != str[last - i]) return false;
  }

  return true;
};
