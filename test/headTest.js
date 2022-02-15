const assert = require('chai').assert;
const head   = require('../head');


describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });


  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("should still yield that one element as its head for an array with only one element ", () => {
    assert.strictEqual(head(["oneElement"]), "oneElement");
  });
  
  it("should yield undefined as its head for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

});