var fs = require('fs')
  , _  = require('lodash')
;

function Respacer() {
  this._lookup = {};
  this._longestWord = 0;
}

Respacer.prototype._loadLookup = function() {
  var self = this;

  fs.readFileSync('/usr/share/dict/american-english').toString().split(/\n/).map(function(word){
    if (word.length > self._longestWord) {
      self._longestWord = word.length;
    }
    self._lookup[word] = true;
  });
}

Respacer.prototype.findTuples = function(input) {
  var self     = this
    , tuples   = []
    , tracking = ['']
  ;

  // tuples is a two-dimensional array consisting of word start index as the
  // first dimension and word end index as the second dimension (sub-array).
  //
  // so:
  //   the first element in the tuples array will contain the end indexes of words that begin at 0
  //   the second element in the tuples array will contain the end indexes of words that begin at 1
  //   etc.

  for(var i = 0, l = input.length; i < l; ++i) {
    tracking.forEach(function(str, start){
      if(null === str || undefined == str) {
        return;
      }
      tracking[start] = str = str + input[i];

      if (self._lookup[str]) {
        tuples[start] = tuples[start] || [];
        tuples[start][i] = true;
        tracking[i + 1] = '';
      }
    });
  }

  return tuples;
}

Respacer.prototype.findLongestTuples = function(tuples, chain, visited) {
  chain = chain || [];

  tuples.forEach(function(ends, startIndex){
  });

  return chain;
}

module.exports = Respacer;
