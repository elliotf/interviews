module.exports = function stringNumSum(input) {
  var numericOnly = input.replace(/[^0-9]/,'');
  return parseInt(numericOnly, 10);
};
