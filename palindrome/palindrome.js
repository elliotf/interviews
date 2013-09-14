String.prototype.isPalindrome = function() {
  var str = this;
  var isOdd = str.length % 2;
  var half = parseInt(str.length / 2, 10) + isOdd;

  var latter = str.substr(half);
  latter = latter.split('').reverse().join('');

  return str.indexOf(latter) === 0;
};
