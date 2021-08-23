const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle()", function() {
 
  it("should return []", function() {
    assert.deepEqual(middle([1]), []);
  });

  it("should return [2]", function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [2, 3]", function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});