var chai    = require('chai')
  , expect  = chai.expect
  , sweeper = require('./main')
  , _       = require('lodash')
;

require('mocha-sinon');
chai.use(require('sinon-chai'));

describe("Sweeper", function() {
  beforeEach(function() {
    this.game = new sweeper.Game();
  });

  describe("Game model", function() {
    it("can be instantiated", function() {
      expect(this.game).to.be.instanceof(sweeper.Game);
    });
  });

  describe("Square model", function() {
    beforeEach(function() {
      this.square = new sweeper.Square();
    });

    it("can be instantiated", function() {
      expect(this.square).to.be.instanceof(sweeper.Square);
    });

    describe("#hasBomb", function() {
      describe("when the square does not have a bomb", function() {
        it("returns false", function() {
          expect(this.square.hasBomb()).to.be.false;
        });
      });

      describe("when the square has a bomb", function() {
        beforeEach(function() {
          this.square = new sweeper.Square(true);
        });

        it("returns true", function() {
          expect(this.square.hasBomb()).to.be.true;
        });
      });
    });

    describe("#addNeighbor", function() {
      it("adds a neighbor to the given Square", function() {
        expect(this.square._neighbors).to.have.length(0);

        var neighbor = new sweeper.Square();
        this.square.addNeighbor(neighbor);

        expect(this.square._neighbors).to.have.length(1);
        expect(this.square._neighbors[0]).to.equal(neighbor);
      });

      describe("when the neighbor has a bomb", function() {
        it("increments the bombNeighbors counter", function() {
          expect(this.square.bombNeighbors()).to.equal(0);

          this.square.addNeighbor(new sweeper.Square(true));

          expect(this.square.bombNeighbors()).to.equal(1);
        });
      });
    });

    describe("#reveal", function() {
      beforeEach(function() {
        this.bombNeighbor = new sweeper.Square(true);
        this.sinon.spy(this.bombNeighbor, 'reveal');

        this.safeNeighbor = new sweeper.Square();
        this.sinon.spy(this.safeNeighbor, 'reveal');

        this.square.addNeighbor(this.safeNeighbor);
      });

      it("changes its shown state", function() {
        expect(this.square.shown).to.be.false;

        this.square.reveal();

        expect(this.square.shown).to.be.true;
      });

      describe("when the square is a bomb", function() {
        beforeEach(function() {
          this.square = new sweeper.Square(true);

          this.square.addNeighbor(this.safeNeighbor);
          this.square.addNeighbor(this.bombNeighbor);
        });

        it("changes its state to shown", function() {
          expect(this.square.shown).to.be.false;

          this.square.reveal();

          expect(this.square.shown).to.be.true;
        });

        it("does not call #reveal on its neighbors", function() {
          expect(this.bombNeighbor.reveal).to.not.have.been.called;
          expect(this.safeNeighbor.reveal).to.not.have.been.called;

          this.square.reveal();

          expect(this.bombNeighbor.reveal).to.not.have.been.called;
          expect(this.safeNeighbor.reveal).to.not.have.been.called;
        });

        it("returns -1 to represent 'game over'", function() {
        });
      });

      describe("when the square is not a bomb", function() {
        describe("and has no bomb neighbors", function() {
          it("changes its state to shown", function() {
            expect(this.square.shown).to.be.false;

            this.square.reveal();

            expect(this.square.shown).to.be.true;
          });

          it("calls #reveal on its neighbors", function() {
            expect(this.safeNeighbor.reveal).to.not.have.been.called;

            this.square.reveal();

            expect(this.safeNeighbor.reveal).to.have.been.called;
          });

          it("returns the number of bomb neighbors", function() {
            expect(this.square.reveal()).to.equal(0);
          });
        });

        describe("but has bomb neighbors", function() {
          beforeEach(function() {
            this.square.addNeighbor(this.bombNeighbor);
          });

          it("changes its state to shown", function() {
            expect(this.square.shown).to.be.false;

            this.square.reveal();

            expect(this.square.shown).to.be.true;
          });

          it("does not call #reveal on its neighbors", function() {
            expect(this.bombNeighbor.reveal).to.not.have.been.called;
            expect(this.safeNeighbor.reveal).to.not.have.been.called;

            this.square.reveal();

            expect(this.bombNeighbor.reveal).to.not.have.been.called;
            expect(this.safeNeighbor.reveal).to.not.have.been.called;
          });

          it("returns the number of bomb neighbors", function() {
            expect(this.square.reveal()).to.equal(1);

            this.square.addNeighbor(new sweeper.Square(true));

            expect(this.square.reveal()).to.equal(2);
          });
        });
      });
    });
  });
});
