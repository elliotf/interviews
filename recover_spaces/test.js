var expect   = require('chai').expect
  , Respacer = require('./main')
  , _        = require('lodash')
;

describe.only("Recover spaces", function() {
  beforeEach(function() {
    this.respacer = new Respacer();
  });

  describe("when there are invalid words in the string", function() {

  });

  describe("#_loadLookup", function() {
    it("loads a dictionary file as a lookup table", function() {
      expect(_.keys(this.respacer._lookup).length).to.equal(0);

      this.respacer._loadLookup();

      expect(_.keys(this.respacer._lookup).length).to.be.above(1);
      expect(this.respacer._lookup['waffle']).to.be.true;
    });

    it("finds the length of the longest word", function() {
      expect(this.respacer._longestWord).to.equal(0);

      this.respacer._loadLookup();

      expect(this.respacer._longestWord).to.be.above(1);
    });
  });

  describe("#findLongestTuples", function() {
  });

  describe("#findTuples", function() {
  });

  describe.skip("#recoverSpaces", function() {
    it("finds valid words in the string", function() {
      expect(this.recoverist.recoverSpaces('therespectisthere')).to.equal(['the respect is there']);
    });
  });
});
