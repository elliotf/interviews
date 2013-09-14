var expect = require('chai').expect
  , numSum = require('./palindrome')
;

describe("Palindrome", function() {
  it("returns false for non-palindromes", function() {
    expect("ra".isPalindrome()).to.be.false;
    expect("ralph".isPalindrome()).to.be.false;
    expect("not ralph".isPalindrome()).to.be.false;
  });

  it("returns true for palindromes", function() {
    expect("a".isPalindrome()).to.be.true;
    expect("oo".isPalindrome()).to.be.true;
    expect("bob".isPalindrome()).to.be.true;
    expect("stressed desserts".isPalindrome()).to.be.true;
  });
});
