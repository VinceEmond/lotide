
const tail = require("../tail.js");
const assert = require('chai').assert;


describe("#tail", () => {
  
  it("should not modify original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('should return two elements', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2);
  });

  it('should have "Lighthouse as the first element', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });
  
  it('should have "Lighthouse as the first element', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[1], "Labs");
  });
  

});