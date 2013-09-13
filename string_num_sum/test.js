var expect = require('chai').expect
  , numSum = require('./string_num_sum')
;

describe("stringNumSum", function() {
  it("returns the result as a number", function() {
    expect(numSum('0')).to.be(0);
  });
});
