const tail = require("../tail");
const assert = require("chai").assert;


describe("#tail()", function() {
  it("should return ['Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("should return []", function() {
    assert.deepEqual(tail([]), []);
  });
});