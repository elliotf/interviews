var expect     = require('chai').expect
  , bracketize = require('./main')
;

describe("bracketize", function() {
  describe("when there are no keywords", function() {
    it("returns the input string", function() {
      expect(bracketize('an input string')).to.equal('an input string');
    });
  });

  describe("when keywords are provided", function() {
    it("bracketizes the keywords", function() {
      expect(bracketize('an input string', ['in', 'put'])).to.equal('an [in][put] str[in]g');
    });
  });
});
