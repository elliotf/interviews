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

/*
function RecoverSpaces(input) {
  var tuples   = []
    , tracking = ['']
    , i        = 0
    , lookup   = {}
    , longest  = 0
  ;

  function findWords() {
    for(var i = 0, l = input.length; i < l; ++i) {
      tracking.forEach(function(str, start){
        if(str === null) console.log("UNDEF");
        tracking[start] = str = str + input[i];

        if (lookup[str]) {
          tuples[start] = tuples[start] || [];
          tuples[start][i] = true;
          tracking[i + 1] = '';
        }
      });
    }
  }

  function findLongestTuples() {
  }

  findWords(input);

  console.log(tuples);
}
*/

module.exports = Respacer;
