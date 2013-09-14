var expect = require('chai').expect
  , numSum = require('./palindrome')
;

describe("Palindrome", function() {
  it("returns false for non-palindromes", function() {
    var str = "ralph";
    expect(str.isPalindrome()).to.be.false;
  });

  it("returns true for palindromes", function() {
    var str = "bob";
    expect(str.isPalindrome()).to.be.true;
  });

  it("handles long strings", function() {
    expect("waffles sis selffaw".isPalindrome()).to.be.true;
  });
});
