// Imports for non-test files
// ***************************
// const assertArraysEqual = require("./assertArraysEqual.js");
const assertEqual = require("./assertEqual.js");
// const assertObjectsEqual = require("./assertObjectsEqual.");js
// const countLetters = require("./countLetters.js");
// const countOnly = require("./countOnly.js");
// const eqArrays = require("./eqArrays.js");
// const eqObjects = require("./eqObjects.js");
// const findKeyByValue = require("./findKeyByValue.js");
// const findKey = require("./findKey.js");
// const flatten = require("./flatten.js");
// const head = require("./head.js");
// const letterPositions = require("./letterPositions.js");
// const map = require("./map.js");
// const middle = require("./middle.js");
// const tail = require("./tail.js");
// const takeUntil = require("./takeUntil.js");
// const without = require("./without.js");


// Imports for test files
// *****************************
// const assertArraysEqual = require("../assertArraysEqual.js");
// const assertEqual = require("../assertEqual.js");
// const assertObjectsEqual = require("../assertObjectsEqual.");js
// const countLetters = require("../countLetters.js");
// const countOnly = require("../countOnly.js");
// const eqArrays = require("../eqArrays.js");
// const eqObjects = require("../eqObjects.js");
// const findKeyByValue = require("../findKeyByValue.js");
// const findKey = require("../findKey.js");
// const flatten = require("../flatten.js");
// const head = require("../head.js");
// const letterPositions = require("../letterPositions.js");
// const map = require("../map.js");
// const middle = require("../middle.js");
// const tail = require("../tail.js");
// const takeUntil = require("../takeUntil.js");
// const without = require("../without.js");





// const assertEqual = (actual, expected) => {

//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const tail = (array) => array.slice(1);


module.exports = tail;