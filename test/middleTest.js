const middle = require("../middle.js");
const assert = require('chai').assert;

describe("#middle", () => {

  it("should return an empty array if given a single number", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("should return an empty array if given two numbers", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  
  it("should return the middle element of an array with odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("should return the average of the middle elements of an array of odd length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  
  it("should return the middle two elements of an array of even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  });
  
  it("should return the middle two elements of an array of even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
  });

});