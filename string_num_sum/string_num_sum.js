module.exports = function stringNumSum(input) {
  var numbers = input.split(/[^0-9]+/).map(function(n) {
    return parseInt(n,10);
  });

  function add(memo, num) {
    return memo + num;
  }

  return numbers.reduce(add, 0);
};
