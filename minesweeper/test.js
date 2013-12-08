var chai    = require('chai')
  , expect  = chai.expect
  , sweeper = require('./main')
  , _       = require('lodash')
;

require('mocha-sinon');
chai.use(require('sinon-chai'));

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
