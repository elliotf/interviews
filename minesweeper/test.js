var expect  = require('chai').expect
  , sweeper = require('./main')
  , _       = require('lodash')
;

describe.only("Sweeper", function() {
  beforeEach(function() {
    this.game = new sweeper.Game();
  });

  describe("Game", function() {
    it("can be instantiated", function() {
      expect(this.game).to.be.ok;
    });
  });
});
