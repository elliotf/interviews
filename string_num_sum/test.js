var expect = require('chai').expect
  , numSum = require('./string_num_sum')
;

describe("stringNumSum", function() {
  it("returns the result as a number", function() {
    expect(numSum('0')).to.equal(0);
  });

  it("treats contiguous digits as one number", function() {
    expect(numSum('123')).to.equal(123);
    expect(numSum('0123')).to.equal(123);
  });

  it("ignores non-numeric characters", function() {
    expect(numSum('a123')).to.equal(123);
  });

  it("sums strings of digits together", function() {
    expect(numSum('02a430')).to.equal(432);
  });
});
