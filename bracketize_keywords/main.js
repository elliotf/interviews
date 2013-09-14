module.exports = function bracketize(str, keywords) {
  keywords = keywords || [];

  keywords.forEach(function(word) {
    var re = new RegExp(word, 'g');
    str = str.replace(re, '[' + word + ']');
  });

  return str;
};
