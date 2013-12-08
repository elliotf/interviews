var fs = require('fs')
  , _  = require('lodash')
;

function Game() {
}

function Square(isBomb) {
  this._neighbors = [];
  this.shown = false;
  this._isBomb = !!isBomb;
  this._numBombNeighbors = 0;
}

Square.prototype.addNeighbor = function(square) {
  this._neighbors.push(square);

  if (square.hasBomb()) this._numBombNeighbors++;
}

Square.prototype.reveal = function() {
  this.shown = true;

  if (!this._numBombNeighbors) {
    this._neighbors.forEach(function(n){ n.reveal() });
  }

  return this._numBombNeighbors;
}

Square.prototype.hasBomb = function() {
  return this._isBomb;
}

Square.prototype.bombNeighbors = function() {
  return this._numBombNeighbors;
}

exports.Game = Game;
exports.Square = Square;
